import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Flex } from "@chakra-ui/react";

const styles = {
  zIndex: 1,
}

const Map: React.FC = () => {
  const coordinates: [number, number] = [41.31286390094148, 69.24438328843463];
  return (
    <Flex >
      <MapContainer style={styles} center={coordinates} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Flex>
  );
};

export default Map;
