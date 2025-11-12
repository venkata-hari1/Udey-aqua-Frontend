import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showToast } from '../../utils/toast';
import { baseURL, endpoints } from '../../config/api';

interface FileItem {
  image: string;
  _id?: string;
}

interface SectionData {
  files?: FileItem[];
  text?: string;
}

interface HomeState {
  loading: boolean;
  header?: {
    email: string;
    phone: string;
    address: string;
  } | null;
  sections: Record<string, SectionData | null>;
  error: string | null;
}

const initialState: HomeState = {
  loading: false,
  header: null,
  sections: {},
  error: null,
};


export const createHeader = createAsyncThunk(
  'home/createHeader',
  async (payload: { email: string; phone: string; address: string }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${baseURL}/${endpoints.createHeader}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Header creation failed');
      showToast(true, 'Header created successfully');
      return fulfillWithValue(result.data);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);


export const uploadSection = createAsyncThunk(
  'home/uploadSection',
  async (formData: FormData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${baseURL}/${endpoints.uploadSection}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Upload failed');
      showToast(true, 'Section updated successfully');
      return fulfillWithValue(result);
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);


export const getSectionData = createAsyncThunk(
  'home/getSectionData',
  async (section: string, { fulfillWithValue, rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${baseURL}/${endpoints.getSectionData}?section=${section}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to fetch section data');
      return fulfillWithValue({ section, data: result.data });
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);


export const deleteSectionImage = createAsyncThunk(
  'home/deleteSectionImage',
  async (
    { section, sid, fid }: { section: string; sid: string; fid: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${baseURL}/${endpoints.deleteSectionImage}/${section}/${sid}/${fid}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to delete image');
      showToast(true, 'Image deleted successfully');
      return fulfillWithValue({ section, fid });
    } catch (error: any) {
      showToast(false, error.message);
      return rejectWithValue(error.message);
    }
  }
);


const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Header
      .addCase(createHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(createHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.header = action.payload;
      })
      .addCase(createHeader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get Section Data
      .addCase(getSectionData.fulfilled, (state, action) => {
        state.sections[action.payload.section] = action.payload.data;
      })

      // Upload Section
      .addCase(uploadSection.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadSection.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(uploadSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete Section Image
      .addCase(deleteSectionImage.fulfilled, (state, action) => {
        const { section, fid } = action.payload;
        const sectionData = state.sections[section];
        if (sectionData?.files) {
          sectionData.files = sectionData.files.filter((file) => file._id !== fid);
        }
      });
  },
});

export default homeSlice.reducer;
