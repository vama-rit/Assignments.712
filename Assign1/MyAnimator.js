class MyAnimator {

    curr_index = 0;
    next_index = 1;
    u=0;

    constructor(kf) {
        this.kf = kf;
    }

    getFrame(elapsed_time) {
        this.elapsed_time = elapsed_time;
        this.updateKfIndex(elapsed_time);
        this.calcU(elapsed_time);
        return new MyKeyFrames(

            elapsed_time,

            new THREE.Vector3(
                this.interpolateLinear(this.u, this.kf[this.curr_index].myPosition.x, this.kf[this.next_index].myPosition.x),
                this.interpolateLinear(this.u, this.kf[this.curr_index].myPosition.y, this.kf[this.next_index].myPosition.y),
                this.interpolateLinear(this.u, this.kf[this.curr_index].myPosition.z, this.kf[this.next_index].myPosition.z)
            ),

            new THREE.Quaternion().copy(this.kf[this.curr_index].myQuaternion)
        )

    }

    updateKfIndex(elapsed_time) {

        // console.log("c_i ", curr_index);
        // console.log("n_i ", next_index);
        if (elapsed_time < this.kf[this.kf.length - 1].t && elapsed_time > this.kf[this.next_index].t) {
            this.curr_index += 1;
            this.next_index = this.curr_index + 1;
        }
    }

    calcU(elapsed_time) {

        let num = elapsed_time - this.kf[this.curr_index].t
        let den = this.kf[this.next_index].t - this.kf[this.curr_index].t

        this.u = num / den;

    }

    interpolateLinear(u, vi, vf) {

        return ((1 - u) * vi + u * vf);
    }

}