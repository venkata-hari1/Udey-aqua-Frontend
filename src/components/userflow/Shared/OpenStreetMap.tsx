import  { Fragment, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
});

const MAP = () => {
  //const storedLat = localStorage.getItem("latitude");
  //const storedLng = localStorage.getItem("longitude");

    const latitude = 18.887193245353117;
    const longitude = 84.57352162603401;
    const markerRef = useRef<L.Marker>(null);
     useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <Fragment>

      <MapContainer
        center={[latitude, longitude]}
        zoom={6}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          
   />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          {/*<Popup>UDAY AQUA INTERNATIONAL PVT.LMT</Popup>*/}
          <Tooltip permanent direction="bottom">UDAY AQUA INTERNATIONAL PVT.LMT </Tooltip>

        </Marker>
      </MapContainer>
    </Fragment>
  );
};

export default MAP;