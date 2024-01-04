import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [50.073721339211495, 14.860049958718298]

export default function Map() {
  return (
    <div className="map-wrap">
      <div className="info-map">
        David Štafa,
        <br />
        Czech Republic,
        <br />
        Český Brod
        <br />
        <span>david@test.cz</span>
      </div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
