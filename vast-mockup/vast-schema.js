module.exports =
{
  version: '3.0',
  ads: [
    {
      id: '1',
      system: { name: 'Coccoc Test Ad Server', version: '1.0' },
      errors: [
        'https://coccoc.com/log?webhpAction=VASTError&name=vb45enteroSVast'
      ],
      impressions: [
        {
          uri: 'https://coccoc.com/log?webhpAction=vastImpression&name=vb45enteroSVast&thisIsVast=1',
          id: ''
        }
      ],
      creatives: [
        {
          type: 'linear',
          duration: 15,
          trackingEvents: [
            {
              event: 'creativeView',
              uri: 'https://coccoc.com/log?webhpAction=bannerShown&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'creativeView',
              uri: 'https://coccoc.com/log?webhpAction=vBannerImpression&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'creativeView',
              uri: 'https://visitanalytics.userreport.com/hit.gif?t=SNV9af2e823&ord=[timestamp]'
            },
            {
              event: 'start',
              uri: 'https://coccoc.com/log?webhpAction=vBannerStartView&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'firstQuartile',
              uri: 'https://coccoc.com/log?webhpAction=vBanner25PercentsView&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'midpoint',
              uri: 'https://coccoc.com/log?webhpAction=vBanner50PercentsView&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'thirdQuartile',
              uri: 'https://coccoc.com/log?webhpAction=vBanner75PercentsView&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'complete',
              uri: 'https://coccoc.com/log?webhpAction=vBannerCompleteView&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'complete',
              uri: 'https://visitanalytics.userreport.com/hit.gif?t=SNV8dc69770&ord=[timestamp]'
            },
            {
              event: 'unmute',
              uri: 'https://coccoc.com/log?webhpAction=vBannerUnMute&bannerId=vb45enteroSVast&thisIsVast=1'
            },
            {
              event: 'mute',
              uri: 'https://coccoc.com/log?webhpAction=vBannerMute&bannerId=vb45enteroSVast&thisIsVast=1'
            }
          ],
          parameters: '{"videos":[{"url":"http://cdn2.coccoc.com/vb/45enteroS/video.mp4?2","type":"video/mp4"}],"AdClickThru": "https://clicktrackingv2.userreport.com/?SNV3a38b443;http://www.enterogermina.com.vn/?utm_source=coccoc_z&utm_medium=cpv&utm_campaign=enterob1.2017_z&utm"}',
          videoClicks: {
            clickThrough: 'https://clicktrackingv2.userreport.com/?SNV3a38b443;http://www.enterogermina.com.vn/?utm_source=coccoc_z&utm_medium=cpv&utm_campaign=enterob1.2017_z&utm',
            clickTrackings: [
              'https://coccoc.com/log?webhpAction=bannerClick&bannerId=vb45enteroSVast&thisIsVast=1'
            ],
            customClicks: []
          },
          mediaFiles: [
            {
              id: 'vpaid',
              delivery: 'progressive',
              type: 'application/javascript',
              uri: 'http://127.0.0.1:3003/build/vpaid.js',
              width: 640,
              height: 360,
              scalable: true,
              apiFramework: 'VPAID'
            },
            {
              id: 'video',
              delivery: 'progressive',
              type: 'video/mp4',
              uri: 'http://cdn2.coccoc.com/vb/45enteroS/video.mp4?2',
              width: 640,
              height: 360,
              scalable: true,
              apiFramework: 'VPAID'
            }
          ]
        }
      ],
      type: 'inline',
      title: 'Coccoc Vast',
      description: ''
    }
  ]
}
