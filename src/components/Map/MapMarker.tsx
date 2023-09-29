
import { Marker, Tooltip, MarkerProps } from "react-leaflet";
import { Icon } from "leaflet";
import StationIcon from "@Assets/icons/filled/station-marker.svg";
import { FC } from "react";

const StationMarkerIcon = new Icon({
  iconUrl: StationIcon,
  iconSize: [40, 50]
});

type StationMarkerProps = MarkerProps & {
  address: string;
};

export const StationMarker: FC<StationMarkerProps> = ({ position, address }) => {
  return (
    <Marker position={position} icon={StationMarkerIcon}>
      <Tooltip offset={[20, -5]} className="leaflet-custom-tooltip">
        { address }
      </Tooltip>
    </Marker>
  );
};
