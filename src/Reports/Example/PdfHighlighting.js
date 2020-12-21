import React from "react";
import "./example.css";

export default class PdfHighlighting extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: false,
      highlightText0: false,
      highlightText1: false,
      highlightText2: false,
      highlightText3: false,
      highlightText4: false,
      highlightText5: false,
      highlightText6: false,
      highlightText7: false,
      highlightText8: false,
      highlightText9: false,
      highlightText10: false
    };

    this.clickHighlight = this.clickHighlight.bind(this);
    this.redirectPage4 = this.redirectPage4.bind(this);
    this.redirectPage3 = this.redirectPage3.bind(this);
    this.redirectPage2 = this.redirectPage2.bind(this);
    this.redirectPage1 = this.redirectPage1.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    this.exitPage = this.exitPage.bind(this);
  }

  redirectPage1() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/parentExample#performanceLevelDescribtion";
    }, 100);
  }
  redirectPage2() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/parentExample#addtionalDescribtion";
    }, 100);
  }
  redirectPage3() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/";
    }, 100);
  }
  redirectPage4() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/parentExample";
    }, 100);
  }

  clickHighlight() {
    this.setState({
      disableButton: true
    })
    const audioElement = [
      document.getElementsByClassName("audio-element0")[0],
      document.getElementsByClassName("audio-element1")[0],
      document.getElementsByClassName("audio-element2")[0],
      document.getElementsByClassName("audio-element3")[0],
      document.getElementsByClassName("audio-element4")[0],
      document.getElementsByClassName("audio-element5")[0],
      document.getElementsByClassName("audio-element6")[0],
      document.getElementsByClassName("audio-element7")[0],
      document.getElementsByClassName("audio-element8")[0],
      document.getElementsByClassName("audio-element9")[0],
      document.getElementsByClassName("audio-element10")[0]
    ];
    var timeInterval = [1000];
    const playInterval = 2000;
    const ids = ['1']

    for (let ti = 0; ti < audioElement.length; ti++) {
      timeInterval[ti + 1] = timeInterval[ti] + (audioElement[ti].duration) * 1000 + playInterval;
    }

    for (let i = 0; i < audioElement.length; i++) {
      setTimeout(() => {
        abc(i);
        if (i !== audioElement.length) audioElement[i].play();
      }, timeInterval[i]);
    }

    const abc = (i) => {
      this.setState({
        highlightText0: false,
        highlightText1: false,
        highlightText2: false,
        highlightText3: false,
        highlightText4: false,
        highlightText5: false,
        highlightText6: false,
        highlightText7: false,
        highlightText8: false,
        highlightText9: false,
        highlightText10: false,
      });

      switch (i) {
        case 0:
          this.setState({
            highlightText0: true,
          });
          break;
        case 1:
          this.setState({
            highlightText1: true,
          });
          break;
        case 2:
          this.setState({
            highlightText2: true,
          });
          break;
        case 3:
          this.setState({
            highlightText3: true,
          });
          break;
        case 4:
          this.setState({
            highlightText4: true,
          });
          break;
        case 5:
          this.redirectPage1();
          this.setState({
            highlightText5: true,
          });
          break;
        case 6:
          this.setState({
            highlightText6: true,
          });
          break;
        case 7:
          this.setState({
            highlightText7: true,
          });
          break;
        case 8:
          this.redirectPage2();
          this.setState({
            highlightText8: true,
          });
          break;
        case 9:
          this.setState({
            highlightText9: true,
          });
          break;
        case 10:
          this.setState({
            highlightText10: true,
          });
          break;
        default:
          this.setState({
            highlightText0: false,
            highlightText1: false,
            highlightText2: false,
            highlightText3: false,
            highlightText4: false,
            highlightText5: false,
            highlightText6: false,
            highlightText7: false,
            highlightText8: false,
            highlightText9: false,
            highlightText10: false
          });
          break;
      }
    };
  }
  stopAudio() {
    this.redirectPage4();
  }
  exitPage() {
    this.redirectPage3();
  }
  render() {
    return (
      <div >
        <div className={`${this.state.highlightText0 ? "fullPdf" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText1 ? "levelScore" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText2 ? "score" : "alert-hidden"}`}  ></div>
        <div id={`${this.state.highlightText3 ? "marksLevel" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText4 ? "scoreDescribtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText5 ? "performanceLevelDescribtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText6 ? "studentPerformanceDescribtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText7 ? "symbolDescribtion" : "alert-hidden"}`}  ></div>
        <div id={`${this.state.highlightText8 ? "addtionalDescribtion" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText9 ? "actScoring" : "alert-hidden"}`} ></div>
        <div id={`${this.state.highlightText10 ? "measure" : "alert-hidden"}`} ></div>
        <div class="vl">
          <button ><a href='/files/High School Math.pdf' className="downloadButton" download >Download</a></button>
          <button className="playButton" onClick={this.clickHighlight} disabled={this.state.disableButton}>Play</button>
          <button className="cancelButton" id="removeSourceProperty" onClick={this.stopAudio}>Stop</button>
          <button className="stopButton" id="removeSourceProperty" onClick={this.exitPage}>Exit</button>
          <button className="printButton"  >print</button>
          <div>
          </div>
          <div className="element">
            <audio className="audio-element0" preload="auto">
              <source src="/files2/speech_0.mp3" ></source>
            </audio>
            <audio className="audio-element1" preload="auto">
              <source src="/files2/speech_1.mp3"></source>
            </audio>
            <audio className="audio-element2" preload="auto">
              <source src="/files2/speech_2.mp3"></source>
            </audio>
            <audio className="audio-element3" preload="auto">
              <source src="/files2/speech_3.mp3"></source>
            </audio>
            <audio className="audio-element4" preload="auto">
              <source src="/files2/speech_4.mp3"></source>
            </audio>
            <audio className="audio-element5" preload="auto">
              <source src="/files2/speech_5.mp3"></source>
            </audio>
            <audio className="audio-element6" preload="auto">
              <source src="/files2/speech_6.mp3"></source>
            </audio>
            <audio className="audio-element7" preload="auto">
              <source src="/files2/speech_7.mp3"></source>
            </audio>
            <audio className="audio-element8" preload="auto">
              <source src="/files2/speech_8.mp3"></source>
            </audio>
            <audio className="audio-element9" preload="auto">
              <source src="/files2/speech_9.mp3"></source>
            </audio>
            <audio className="audio-element10" preload="auto">
              <source src="/files2/speech_1_0.mp3"></source>
            </audio>
          </div>
        </div>
      </div>

    );
  }
}