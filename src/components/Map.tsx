import { GoogleMap ,LoadScript,Marker,useJsApiLoader} from '@react-google-maps/api'
import React from 'react'
import {APIKEY} from '../type/Types'
interface Props {
    data:any
}

const Map = (props: Props) => {
    const {data} = props
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: APIKEY
      })
    const mapStyles={
        height:"50vh",
        with:"100%",    
    }
    const defaultCenter={
lat:data.lat,
lng:data.lng
    }
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >

         <Marker
         position={defaultCenter}
         />
          <></>
        </GoogleMap>
    ) : <></>
}

export default Map
