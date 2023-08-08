import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Flex } from "@chakra-ui/react";

const styles = {
  height: "calc(100vh - 64px)",
  zIndex: 1
};

const Map: FC = () => {
  const coordinates: [number, number] = [41.31286390094148, 69.24438328843463];

  return (
    <Flex>
      <MapContainer
        style={ styles }
        center={ coordinates }
        zoom={ 13 }
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ coordinates }>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Flex>
  );
};

export default Map;
