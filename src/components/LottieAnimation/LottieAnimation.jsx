import { Player } from '@lottiefiles/react-lottie-player';
import PropTypes from 'prop-types'
const LottieAnimation = ({anim}) => {
    return (
        <div>

            <Player
                src={anim}
                className="player w-[70%]"
                loop
                autoplay
            />

        </div>
    );
};
LottieAnimation.prototype={
    anim:PropTypes.string
}

export default LottieAnimation;
