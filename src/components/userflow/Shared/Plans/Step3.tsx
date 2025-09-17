import { Box, Button, Grid, MenuItem, Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { usePlansStyles } from "../sharedStyles";
import FormField from "../FormField";
import { IMAGES } from "./constants";
import { validateForm } from "./utils";
import type { StepComponentProps, FormData, FormErrors } from "./types";
// Data.gov.in: All India Pincode Directory (Department of Posts)
// Source: https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd
const PIN_API_BASE = "https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd";
const PIN_API_KEY = "579b464db66ec23bdd000001c7d253bb9fed4440689f354ac31fa38f";

interface Step3Props extends StepComponentProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

const Step3 = ({
  onStepChange,
  currentStep,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}: Step3Props) => {
  const { classes } = usePlansStyles();

  // Full list of Indian States/UTs (fallback/guarantee UI completeness)
  const ALL_INDIA_STATES: string[] = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman And Nicobar Islands","Chandigarh","Dadra And Nagar Haveli And Daman And Diu","Delhi","Jammu And Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  // State list (shown in dropdown)
  const [statesList, setStatesList] = useState<string[]>(ALL_INDIA_STATES);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [stateDistrictPin, setStateDistrictPin] = useState<Record<string, Record<string, Set<string>>>>({});

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // setLoadingStates(true);
        const url = `${PIN_API_BASE}?api-key=${PIN_API_KEY}&format=json&limit=1000&offset=0`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const records: Array<{ statename?: string }> = data?.records || [];
        const sFromApi = Array.from(new Set(
          records
            .map((r) => (r.statename || "").toString().trim())
            .filter(Boolean)
            .map((raw) => raw
              .toLowerCase()
              .split(" ")
              .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
              .join(" ")
            )
        ));
        const merged = Array.from(new Set([...ALL_INDIA_STATES, ...sFromApi])).sort();
        if (mounted) setStatesList(merged);
      } catch {
        if (mounted) setStatesList(ALL_INDIA_STATES);
      } finally {
      }
    })();
    return () => { mounted = false; };
  }, []);

  const handleBackClick = () => {
    if (onStepChange) {
      onStepChange((currentStep || 1) - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleStateChange = async (stateName: string) => {
    setFormErrors((prev) => ({ ...prev, state: undefined, district: undefined, pincode: undefined }));
    setLoadingDistricts(true);
    try {
      const cacheKey = `pin_state_map_v1_${stateName}`;
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached) as Record<string, string[]>;
          const fromCache: Record<string, Set<string>> = {};
          Object.keys(parsed).forEach((dist) => { fromCache[dist] = new Set(parsed[dist]); });
          setStateDistrictPin((prev) => ({ ...prev, [stateName]: fromCache }));
          const firstDist = Object.keys(fromCache).sort()[0] || "";
          setFormData((prev) => ({
            ...prev,
            state: stateName,
            district: firstDist,
            pincode: "",
          }));
          return; 
        }
      } catch {}

      const mapForState: Record<string, Set<string>> = {};
      const pageSize = 1000;
      for (let offset = 0; offset < 3000; offset += pageSize) {
        const url = `${PIN_API_BASE}?api-key=${PIN_API_KEY}&format=json&limit=${pageSize}&offset=${offset}&filters[statename]=${encodeURIComponent(stateName)}`;
        const res = await fetch(url);
        if (!res.ok) break;
        const data = await res.json();
        const records: Array<{ district?: string; pincode?: string }> = data?.records || [];
        if (!records.length) break;
        for (const r of records) {
          const d = (r.district || "").toString().trim();
          const p = (r.pincode || "").toString().trim();
          if (!d || !p) continue;
          const dist = d
            .toLowerCase()
            .split(" ")
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
            .join(" ");
          if (!mapForState[dist]) mapForState[dist] = new Set<string>();
          mapForState[dist].add(p);
        }
        if (records.length < pageSize) break;
      }
      setStateDistrictPin((prev) => ({ ...prev, [stateName]: mapForState }));
      try {
        const serializable: Record<string, string[]> = {};
        Object.entries(mapForState).forEach(([dist, pins]) => {
          serializable[dist] = Array.from(pins);
        });
        localStorage.setItem(cacheKey, JSON.stringify(serializable));
      } catch {}
      const dists = mapForState;
      const firstDist = Object.keys(dists).sort()[0] || "";
      setFormData((prev) => {
        const nextDistrict = firstDist;
        const nextPincode = "";
        return {
          ...prev,
          state: stateName,
          district: nextDistrict,
          pincode: nextPincode,
        };
      });
    } finally {
      setLoadingDistricts(false);
    }
  };

  const handleDistrictChange = (districtName: string) => {
    setFormData((prev) => {
      if (prev.district === districtName) return prev;
      return { ...prev, district: districtName, pincode: "" };
    });
    setFormErrors((prev) => ({ ...prev, district: undefined, pincode: undefined }));
  };

  const handleContinue = () => {
    const digitsOnly = (formData.phone || "").replace(/[^0-9]/g, "");
    const normalizedPhone = /^\+91\d{10}$/.test(formData.phone)
      ? formData.phone
      : /^\d{10}$/.test(digitsOnly)
      ? `+91${digitsOnly}`
      : formData.phone;

    const normalizedForm = { ...formData, phone: normalizedPhone };

    const { isValid, errors } = validateForm(normalizedForm);
    setFormErrors(errors);

    if (!isValid) {
      console.warn("Step3 form validation failed:", { errors, data: normalizedForm });
      return;
    }

    console.log("Step3 form submitted:", {
      name: normalizedForm.name.trim(),
      phone: normalizedForm.phone,
      email: normalizedForm.email.trim(),
      address: normalizedForm.address.trim(),
      district: normalizedForm.district.trim(),
      pincode: normalizedForm.pincode,
      state: normalizedForm.state.trim(),
    });

    if (onStepChange) {
      let skipStep4 = false;
      try {
        const raw = localStorage.getItem("plans_pref");
        if (raw) {
          const pref = JSON.parse(raw) as { price?: number; selectedCultureType?: string };
          if (pref?.price === 99) {
            skipStep4 = true;
          }
        }
      } catch {}
      onStepChange(skipStep4 ? 5 : 4);
    }
  };

  return (
    <Box className={classes.step2Root}>
      <Typography variant="h4" className={classes.plansHeaderTitle}>
        Book Your slot Now!
      </Typography>

      <Grid container className={classes.step2Container}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={IMAGES.acc1}
            alt="Aquaculture booking"
            className={classes.step3Illustration}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.step3FormCol}>
          <Grid container spacing={2} className={classes.step3FieldsGrid}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                error={formErrors.name}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Phone"
                placeholder="+91 9876543210"
                required
                value={`+91 ${formData.phone || ""}`}
                onChange={(value) => {
                  const digitsOnly = value.replace(/\D/g, "");
                  const withoutCountry = digitsOnly.startsWith("91") ? digitsOnly.slice(2) : digitsOnly;
                  const tenDigits = withoutCountry.slice(0, 10);
                  handleInputChange("phone", tenDigits);
                }}
                error={formErrors.phone}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Email ID"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                error={formErrors.email}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormField
                label="Address"
                placeholder="Enter your address"
                multiline
                rows={3}
                value={formData.address}
                onChange={(value) => handleInputChange("address", value)}
                error={formErrors.address}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className={`${classes.step3FormField} ${classes.step3FieldTop}`}>
              <Box className={classes.step3FormField}>
                <Typography className={classes.step3Label}>
                  <span className={classes.step3Asterisk}>*</span> State
                </Typography>
                <TextField
                  select
                  value={formData.state}
                  onChange={(e) => handleStateChange(e.target.value)}
                  placeholder="Select your state"
                  className={classes.step3Field}
                  error={!!formErrors.state}
                  helperText={formErrors.state}
                  fullWidth
                  SelectProps={{ MenuProps: { PaperProps: { style: { maxHeight: 300 } } } }}
                >
                  {statesList.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={classes.step3FormField}>
                <Typography className={classes.step3Label}>
                  <span className={classes.step3Asterisk}>*</span> District
                </Typography>
                <TextField
                  select
                  value={formData.district}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  placeholder="Select your district"
                  className={classes.step3Field}
                  error={!!formErrors.district}
                  helperText={formErrors.district}
                  disabled={!formData.state || loadingDistricts}
                  fullWidth
                  SelectProps={{ MenuProps: { PaperProps: { style: { maxHeight: 300 } } } }}
                >
                  {Object.keys(stateDistrictPin[formData.state] || {}).map((name) => (
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className={`${classes.step3FormField} ${classes.step3FieldTop}`}>
              <Box className={classes.step3FormField}>
                <Typography className={classes.step3Label}>
                  <span className={classes.step3Asterisk}>*</span> Pincode
                </Typography>
                <TextField
                  select
                  value={formData.pincode}
                  onChange={(e) => handleInputChange("pincode", e.target.value)}
                  placeholder="Select your pincode"
                  className={classes.step3Field}
                  error={!!formErrors.pincode}
                  helperText={formErrors.pincode}
                  disabled={!formData.state || !formData.district || loadingDistricts}
                  fullWidth
                  SelectProps={{ MenuProps: { PaperProps: { style: { maxHeight: 300 } } } }}
                >
                  {Array.from((stateDistrictPin[formData.state] || {})[formData.district] || [])
                    .sort()
                    .map((pin) => (
                      <MenuItem key={pin} value={pin}>{pin}</MenuItem>
                    ))}
                </TextField>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box className={classes.step3ButtonWrapper}>
                <Button
                  variant="contained"
                  className={classes.plansCardButton}
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box className={classes.step2BackButtonContainer}>
        <Button onClick={handleBackClick} className={classes.step2BackButton}>
          <ChevronLeft /> Back
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;
