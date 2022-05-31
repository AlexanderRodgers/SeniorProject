  <div class="row">
    <div class="content-info">
      <div class="action-buttons">
        <button id="fly-to" on:click={flyToRandomPlace}
          >Fly to random location</button
        >
  
        <button
          id="change-zoom"
          on:click={() => (zoom = Math.floor(Math.random() * 10))}
          >Change Zoom Level</button
        >
        </div>

      <div class="section-txt" id="geocoder">
        <form>
        <Geocoder value="(Near London)" accessToken={mapboxToken} on:result={placeChanged} on:clear={() => mapComponent.setCenter({ lng: 0, lat: 0 })} />
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
            on:drag={drag}
            {center}
            bind:zoom
          >
            <NavigationControl />
            <GeolocateControl on:geolocate={e => console.log('geolocated', e.detail)} />
            <Marker lat={marker.lat} lng={marker.lng} />
          </Map>
        </div>
        {#if center}
          <dt>Geolocation:</dt>
          <dd>lat: {center.lat}, lng: {center.lng}</dd>
          <dd>zoom: {zoom}</dd>
        {/if}
      </div>
    </div>
  </div>

<style>
  .map-wrap {
    width: 100%;
    height: 60vh;
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

  let page = 'about'
  let center = { lat: 53.3358627, lng: -2.8572362 }
  let marker = center
  let zoom = 11.15
  let mapComponent

  function navigate (next) {
    page = next
  }

  function placeChanged (e) {
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

  function drag ({ detail }) {
    marker = detail.center
  }
</script>