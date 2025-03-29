import React, { useEffect, useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const videoRef = useRef(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Function to restart the video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to the start of the video
      videoRef.current.play(); // Start playing from the beginning
    }
  };

  // Pause video on component mount or based on state
  useEffect(() => {
    if (videoRef.current) {
      // Play the video on mount
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <div className="login__wrapper">
        <div className="login__left">
          <div className="video-container relative overflow-hidden bg-black">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted // Mute the video
              playsInline
              poster="https://videocdn.cdnpk.net/videos/9449dc52-4813-5066-8844-1b35a5bc994c/horizontal/thumbnails/large.jpg?uid=R193762245&amp;ga=GA1.1.79695430.1743222115&amp;item_id=2946395"
              className="login__left-video"
              onEnded={handleVideoEnd} // Restart video when it ends
            >
              <source
                src="https://videocdn.cdnpk.net/videos/9449dc52-4813-5066-8844-1b35a5bc994c/horizontal/previews/watermarked/large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="login__right">
          <div className="login__block">
            <h2>Войти</h2>
            <h3>Добро пожаловать ! Пожалуйсто ведите свою учетную запись</h3>

            <form>
              <div className="user__number">
                <div className="number__region">+996</div>
                <input type="text" />
              </div>
              <div className="user__password">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Пароль"
                />
                <div
                  className="eye_password"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
                </div>
              </div>
              <button type="submit">Вход</button>
            </form>
            <p>
              У вас нет учетной записи ? <span>Зарегестрируйтесь сейчас</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
