# WebRTC player

[Demo](https://softvelum.com/webrtc/demo-player/)

## Getting Started

[Download](https://github.com/Softvelum/webrtc-player/releases/latest)


### Add library to HTML

```html
<script defer="defer" src="webrtc-player.js"></script>
```

### Usage

```javascript
const video = document.querySelector('video');
const player = new WebRTCPlayer({
  video: video,
  type: 'whep'
});
player.load(new URL('https://127.0.0.1:8443/live/whip/whep.stream'));
```

### Full example

```html
<!DOCTYPE html>
<html>
  <head>
    <script defer="defer" src="webrtc-player.js"></script>
  </head>
  <body>
    <video autoplay muted controls playsinline>
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", 
      const video = document.querySelector('video');
      const player = new WebRTCPlayer({
        video: video,
        type: 'whep'
      });
      player.load(new URL('https://127.0.0.1:8443/live/whip/whep.stream''));
      });
    </script>
  </body>
</html>
```

## Options

```javascript
{
  video: HTMLVideoElement;
  iceServers: RTCIceServer[]; // ICE server config
  type: string; // type of adapter (see below for a list of included adapters below)
  adapterFactory: AdapterFactoryFunction; // provide a custom adapter factory when adapter type is "custom"
  vmapUrl?: string; // url to endpoint to obtain VMAP XML (ads)
  statsTypeFilter?: string; // regexp to match what RTC stats events will be emitted
  timeoutThreshold?: number; // timeout in ms until no-media event is emitted (default 30000 ms)
  mediaConstraints?: {
    audioOnly?: boolean, // sets the "audio-only" playback mode (default: false)
    videoOnly?: boolean // sets the "video-only" playback mode (default: false)
  }
}
```

## Related documentation
- [WebRTC in Softvelum products](https://softvelum.com/webrtc/)
- [WebRTC setup in Nimble Streamer](https://blog.wmspanel.com/2022/05/webrtc-publish-setup-nimble-streamer.html)
- Video: [WebRTC ingest setup in Nimble Streamer](https://www.youtube.com/watch?v=o7DnQuLLerM)
- [Opus audio support in SLDP](https://blog.wmspanel.com/2022/07/opus-sldp.html)
- [Play audio-only SLDP with Opus on iPhone](https://blog.wmspanel.com/2022/09/audio-sldp-opus-webrtc-iphone.html)
