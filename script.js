body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: rgb(30, 30, 30);
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: auto;
  background-color: rgb(30, 30, 30);
}

.title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.title .orange {
  color: #FFA500;
  margin-left: 2px;
}
.title .white {
  color: #fff;
}

.typing-effect {
  font-size: 12px;
  margin-bottom: 8px;
  min-height: 16px;
  color: #666;
  z-index: 1;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  background: none;
  border: none;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: relative;
}
.typing-effect::after {
  content: "|";
  animation: blink 0.7s step-end infinite;
  position: absolute;
  right: -10px;
  color: #666;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.time {
  font-size: 12px;
  margin-bottom: 8px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  color: #666;
  user-select: none;
}
.footer {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  color: #666;
  user-select: none;
}
.social-buttons {
  z-index: 1;
  margin-bottom: 10px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  font-size: 12px;
  display: flex;
  gap: 10px;
  justify-content: center;
  user-select: none;
}
.social-buttons a {
  color: #666;
  text-decoration: underline;
}
.social-buttons a:hover {
  color: #fff;
}

.start-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgb(30, 30, 30);
  flex-direction: column;
  padding: 20px;
  color: #fff;
  user-select: none;
  cursor: pointer;
}
.start-text {
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 4;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: transform 0.3s ease-in-out;
}
.start-text:hover {
  transform: scale(1.1);
}

.back-button {
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}
.back-button:hover {
  color: #ff9900;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(30, 30, 30);
  color: #fff;
  font-size: 12px;
  padding: 20px;
  overflow-y: auto;
  z-index: 5;
  display: none;
  flex-direction: column;
  white-space: pre-wrap;
  user-select: none;
}
.loading-line {
  line-height: 1.3;
}

@media (max-width: 640px) {
  .title {
    font-size: 22px;
  }
  .typing-effect,
  .time {
    font-size: 10px;
    margin-bottom: 6px;
  }
  .footer {
    font-size: 10px;
    bottom: 6px;
    right: 6px;
  }
  .social-buttons {
    font-size: 10px;
    gap: 8px;
  }
  .back-button {
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
  .start-text {
    font-size: 12px;
    letter-spacing: 0.08em;
  }
  .loading-container {
    font-size: 10px;
    padding: 12px;
  }
}
