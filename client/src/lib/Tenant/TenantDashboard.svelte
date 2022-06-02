<div class="row">
  <div class="content-info">
    <div class="absolute top-11 left-5" id="geocoder">
      <form>
      <Geocoder value="Calle Fermín Palma, 3" accessToken={mapboxToken} on:result={placeChanged} on:clear={() => mapComponent.setCenter({ lng: 0, lat: 0 })} />
      {#if place}
        <dl>
          <dt>Name:</dt>
          <dd>{place.label}</dd>
          <dt>Geolocation:</dt>
          <dd>lat: {place.geometry.lat}, lng: {place.geometry.lng}</dd>
        </dl>
      {/if}
      </form>
    </div>
    <div class="section-txt" id="map">
      <div class="map-wrap">
        <Map
          bind:this={mapComponent}
          accessToken={mapboxToken}
          on:recentre={recentre}
          {center}
          bind:zoom
        >
          <NavigationControl />
          <GeolocateControl on:geolocate={e => console.log('geolocated', e.detail)} />
          <Marker color="#0077BD" lat={marker.lat} lng={marker.lng}>
            <div class="card w-64 bg-base-100 shadow-xl" slot="popup">
              <figure><img src="/property_photo.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">870 Islay St.</h2>
                <p>4 Bedrooms</p>
                <p>$4,200/mo.</p>
                <p>Background Check Required</p>
                <p>Credit Check Required</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">View Property</button>
                </div>
              </div>
            </div>
          </Marker>
        </Map>
      </div>
    </div>
  </div>
</div>

<style>

  :global(.mapboxgl-popup-content) {
    display: inline-table;
  }
  .map-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
  }

  #fly-to,
  #change-zoom {
    display: block;
    position: relative;
    margin: 0px auto;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background: #ee8a65;
  }

</style>

<script>
  import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox';
  import { variables } from '../../variables';

  let mapboxToken = variables.mapboxToken;
  const { GeolocateControl, NavigationControl } = controls
  const place = null

  let center = { lng: -3.787621, lat: 37.774632 }
  let marker = { lat: 35.27658, lng: -120.658935 };

  let zoom = 11.15
  let mapComponent

  function navigate (next) {
    page = next
  }

  function placeChanged (e) {
    console.log(e);
    const { result } = e.detail
    mapComponent.setCenter(result.center, 14)
  }
  
  function randomLng () {
    return 77 + (Math.random() - 0.5) * 30
  }

  function randomLat () {
    return 13 + (Math.random() - 0.5) * 30
  }

  function flyToRandomPlace () {
    mapComponent.flyTo({
      center: [
        randomLng(),
        randomLat()
      ],
      essential: true
    })
  }

  function recentre ({ detail }) {
    center = detail.center
  }

  // function drag ({ detail }) {
  //   marker = detail.center
  // }
</script>