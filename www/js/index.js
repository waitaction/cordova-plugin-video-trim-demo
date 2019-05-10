var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        $("#video1").click(function () {
            //### 从相册选择视频后剪辑
            videoTrim.trimSelectedVideo(trimSuccess, trimFail);
            function trimSuccess(filePath) {
                console.log('trimSuccess, path: ' + filePath);
                alert('trimSuccess, path: ' + filePath)
                videoTrim.getVideoPreviewImg(filePath,
                    function (url) {
                        $("#videoImg").append("<img src='" + url + "' />");
                        alert("即将播放剪辑后的短视频");
                        videoTrim.play(filePath, function () { }, function () { });
                    },
                    function () {
                        console.log('error');
                        alert("error");
                    }
                );

            }
            function trimFail(err) {
                console.log('trimFail, err: ' + err);
                alert('trimFail, err: ' + err)
            }

        });

        $("#video2").click(function () {
            //### 录像后前辑
            videoTrim.trimRecordedVideo(trimSuccess, trimFail);
            function trimSuccess(filePath) {
                console.log('trimSuccess, path: ' + filePath);
                alert('trimSuccess, path: ' + filePath)
                videoTrim.trimVideo(filePath,function(){},function(){});
                return;
                videoTrim.getVideoPreviewImg(filePath,
                    function (url) {
                        $("#videoImg").append("<img src='" + url + "' />");
                        alert("即将播放剪辑后的短视频");
                        videoTrim.play(filePath, function () { }, function () { });
                    },
                    function () {
                        console.log('error');
                        alert("error");
                    }
                );
            }
            function trimFail(err) {
                console.log('trimFail, err: ' + err);
                alert('trimFail, err: ' + err)
            }
        })
    }



























    // receivedEvent: function (id) {
    //     $("#selectVideo").click(function () {
    //         navigator.camera.getPicture(function (uri) {
    //             alert(uri);
    //             videoTrimmer.init(function () {
    //                 // 初始化成功
    //                 // todo
    //                 // videoTrimmer.openSelectVideoPage({ outPath: uri }, function (videoUrl) {
    //                 //     // 截取视频片段成功，视频片段地址 videoUrl
    //                 //     // 播放截取后的视频片段
    //                 //     videoTrimmer.play({ path:videoUrl },function(){ },function(){ }); // 播放
    //                 // }, function (err) {
    //                 //     // 截取视频片段失败
    //                 // });
    //                 var dataDirectory = window.cordova.file.dataDirectory;
    //                 var outPath = dataDirectory + "test.mp4"; // 输出最终短视频的路径
    //                 videoTrimmer.openTrimmerPage({ path: uri, outPath: outPath }, function (videoUrl) {
    //                     // 截取视频片段成功，视频片段地址 videoUrl
    //                     // todo
    //                     alert(videoUrl);

    //                 }, function (error) {
    //                     // 截取视频片段失败
    //                 });
    //             });
    //             // VideoTrim.trim(
    //             //     function (result) {
    //             //         alert('trimSuccess, result: ' + result);
    //             //         console.log('trimSuccess, result: ' + result);
    //             //     },
    //             //     function (err) {
    //             //         alert('trimFail, err: ' + err);
    //             //         console.log('trimFail, err: ' + err);
    //             //     },
    //             //     {
    //             //         path: uri, // path to input video,
    //             //         limit: 20 // max limit, only for android
    //             //     }
    //             // );
    //         }, function (message) {
    //             alert('Failed because: ' + message);
    //         }, {
    //                 sourceType: 0,//1
    //                 mediaType: 1
    //             });
    //     });

    // }
};
app.initialize();