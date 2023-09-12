import { Dispatch, FC, SetStateAction, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import StationMarkerIcon from "@Assets/icons/filled/station-marker.svg";

const styles = {
  height: "100%",
  minHeight: "400px",
  zIndex: 1
};

const stationIcon = new Icon({
  iconUrl: StationMarkerIcon,
  iconSize: [40, 50]
});

const swipeAngleGap = 20;
const swipeTimeGap = 300;

type CustomTileLayerProps = {
  setIsSwiped: Dispatch<SetStateAction<boolean>>;
}

export const CustomTileLayer: FC<CustomTileLayerProps> = ({ setIsSwiped }) => {
  const [pointX, setPointX] = useState<number | null>(null);
  const [pointY, setPointY] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  useMapEvents({
    mousedown: ({ containerPoint: { x, y } }) => {
      setPointX(x);
      setPointY(y);
      setStartTime(Date.now());
    },
    mouseout: ({ containerPoint: { x, y }}) => {
      if (!startTime || !pointX || !pointY) return;

      const c = pointX - x;
      const angleDegrees = swipeAngleGap;
      const angleRadians = (angleDegrees * Math.PI) / 180;
      const gap = c * Math.sin(angleRadians);

      if (x < pointX && (Math.abs(pointY - y) <= gap) && Date.now() - startTime <= swipeTimeGap) {
        setIsSwiped(true);
      }

      setPointX(null);
      setPointY(null);
      setStartTime(null);
    }
  });

  return (
    <TileLayer
      attribution=""
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

export const Map: FC = () => {
  const [isSwiped, setIsSwiped] = useState(false);
  const coordinates: [number, number] = [41.31286390094148, 69.24438328843463];
  const width = isSwiped ? "300px" : "100px";
  console.log(isSwiped);

  return (
    <MapContainer
      key={isSwiped ? "open-state": "closed-state"}
      style={{...styles, width }}
      center={coordinates}
      zoom={13}
    >
      <CustomTileLayer setIsSwiped={setIsSwiped}/>
      <Marker position={coordinates} icon={stationIcon}>
        <Tooltip offset={[20, -5]} className="leaflet-custom-tooltip">Tashkent, 18 А Navoi Avenue (Landmark: Tech University)</Tooltip>
      </Marker>
    </MapContainer>
  );
};
