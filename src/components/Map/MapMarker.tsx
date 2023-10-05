
import { FC } from "react";
import { Marker, Tooltip, MarkerProps } from "react-leaflet";
import { Icon } from "leaflet";
import { useDetectWidth } from "@Hooks";
import StationIcon from "@Assets/icons/filled/station-marker.svg";

const StationMarkerIcon = new Icon({
  iconUrl: StationIcon,
  iconSize: [40, 50]
});

type StationMarkerProps = MarkerProps & {
  address: string;
};

export const StationMarker: FC<StationMarkerProps> = ({ position, address }) => {
  const { isLargerThan600 } = useDetectWidth();

  return (
    <Marker position={position} icon={StationMarkerIcon}>
      <Tooltip
        offset={isLargerThan600 ? [20, -5] : [0, -25]}
        direction={isLargerThan600 ? "right" : "top"}
        className="leaflet-custom-tooltip"
      >
        { address }
      </Tooltip>
    </Marker>
  );
};
