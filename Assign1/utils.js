function getKeyFrameinputs() {

    let keyFrameString = [
        "0.0  0.0 0.0 0.0 1.0 1.0 -1.0 0.0",
        "1.0  4.0 0.0 0.0 1.0 1.0 -1.0 30.0",
        "2.0  8.0 0.0 0.0 1.0 1.0 -1.0 90.0",
        "3.0  12.0 12.0 12.0 1.0 1.0 -1.0 180.0",
        "4.0  12.0 18.0 18.0 1.0 1.0 -1.0 270.0",
        "5.0  18.0 18.0 18.0 0.0 1.0 0.0 90.0",
        "6.0  18.0 18.0 18.0 0.0 0.0 1.0 90.0",
        "7.0  25.0 12.0 12.0 1.0 0.0 0.0 0.0",
        "8.0  25.0 0.0 18.0 1.0 0.0 0.0 0.0",
        "9.0  25.0 1.0 18.0 1.0 0.0 0.0 0.0",
    ].join("\n");

    function toRadians(degree) {

        return ((Math.PI / 180) * degree)
    }

    var parseKFString = function (kfString) {
        let kfArray = [];


        for (let kfstr of kfString.split("\n")) {

            const quaternion = new THREE.Quaternion();
            let WHITE_SPACE_RE = /[ ,]+/;
            let [t, x, y, z, xa, ya, za, theta] = kfstr.trim().split(WHITE_SPACE_RE);
            let kf = new MyKeyFrames(
                parseFloat(t),
                new THREE.Vector3(
                    parseFloat(x),
                    parseFloat(y),
                    parseFloat(z)),
                quaternion.setFromAxisAngle(new THREE.Vector3(
                    parseFloat(xa),
                    parseFloat(ya),
                    parseFloat(za),
                ), toRadians(parseFloat(theta)))
            );
            kfArray.push(kf);
        }

        return kfArray;
    };

    let keyFrames = parseKFString(keyFrameString);

    return keyFrames;
}

