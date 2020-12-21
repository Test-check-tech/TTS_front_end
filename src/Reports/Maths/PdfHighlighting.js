import React from "react";
import "./pdf.css";

export default class PdfHighlighting extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: false,
      highlightText: false,
      highlightText1: false,
      highlightText2: false,
      highlightText3: false,
      highlightText4: false,
      highlightText5: false,
      highlightText6: false,
      highlightText7: false,
      highlightText8: false,
      highlightText9: false
    };

    this.clickHighlight = this.clickHighlight.bind(this);
    this.redirectPage5 = this.redirectPage5.bind(this);
    this.redirectPage4 = this.redirectPage4.bind(this);
    this.redirectPage3 = this.redirectPage3.bind(this);
    this.redirectPage2 = this.redirectPage2.bind(this);
    this.redirectPage1 = this.redirectPage1.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    this.exitPage = this.exitPage.bind(this);
  }

  redirectPage1() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/maths#selected1";
    }, 100);
  }
  redirectPage2() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/maths#selected2";
    }, 100);
  }
  redirectPage3() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/maths#selected3";
    }, 100);
  }
  redirectPage4() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/";
    }, 100);
  }
  redirectPage5() {
    setTimeout(function () {
      window.location.href = "http://172.17.0.126:3000/maths";
    }, 100);
  }

  clickHighlight() {
    this.setState({
      disableButton: true
    })
    const audioElement = [
      document.getElementsByClassName("audio-element")[0],
      document.getElementsByClassName("audio-element1")[0],
      document.getElementsByClassName("audio-element2")[0],
      document.getElementsByClassName("audio-element3")[0],
      document.getElementsByClassName("audio-element4")[0],
      document.getElementsByClassName("audio-element5")[0],
      document.getElementsByClassName("audio-element6")[0],
      document.getElementsByClassName("audio-element7")[0],
      document.getElementsByClassName("audio-element8")[0],
      document.getElementsByClassName("audio-element9")[0]
    ];
    var timeInterval = [1000];
    const playInterval = 2000;
    for (let ti = 0; ti < audioElement.length; ti++) {
      timeInterval[ti + 1] = timeInterval[ti] + (audioElement[ti].duration) * 1000 + playInterval;
    }
    console.log(timeInterval)

    for (let i = 0; i < audioElement.length; i++) {
      setTimeout(() => {
        abc(i);
        if (i !== 10) audioElement[i].play();
      }, timeInterval[i]);
    }

    const abc = (i) => {
      this.setState({
        highlightText: false,
        highlightText1: false,
        highlightText2: false,
        highlightText3: false,
        highlightText4: false,
        highlightText5: false,
        highlightText6: false,
        highlightText7: false,
        highlightText8: false,
        highlightText9: false,
      });

      switch (i) {
        case 0:
          this.setState({
            highlightText: true,
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
          this.redirectPage1();
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
          this.redirectPage3();
          this.setState({
            highlightText9: true,
          });
          break;
        default:
          this.setState({
            highlightText: false,
            highlightText1: false,
            highlightText2: false,
            highlightText3: false,
            highlightText4: false,
            highlightText5: false,
            highlightText6: false,
            highlightText7: false,
            highlightText8: false,
            highlightText9: false,
          });
          break;
      }
    };
  }
  stopAudio() {
    this.redirectPage5();
  }
  exitPage() {
    this.redirectPage4();
  }
  render() {
    return (
      <>
        <div >
          <div className={`${this.state.highlightText ? "firstName" : "alert-hidden"}`} ></div>
          <div className={`${this.state.highlightText ? "lastName" : "alert-hidden"}`}  > </div>
          <div id={`${this.state.highlightText1 ? "passage" : "alert-hidden"}`} ></div>
          <div id={`${this.state.highlightText2 ? "levelScore" : "alert-hidden"}`}  ></div>

          <div id={`${this.state.highlightText3 ? "marks" : "alert-hidden"}`} ></div>
          <div id={`${this.state.highlightText4 ? "marksSchool" : "alert-hidden"}`} ></div>
          <div id={`${this.state.highlightText5 ? "marksDistrict" : "alert-hidden"}`} ></div>
          <div id={`${this.state.highlightText6 ? "marksState" : "alert-hidden"}`} ></div>

          <div id={`${this.state.highlightText7 ? "selected1" : "alert-hidden"}`}  ></div>
          <div id={`${this.state.highlightText8 ? "selected2" : "alert-hidden"}`} ></div>
          <div id={`${this.state.highlightText9 ? "selected3" : "alert-hidden"}`} ></div>

          <div className='container'>
            <button className="playButton" onClick={this.clickHighlight} disabled={this.state.disableButton}>Play</button>
            <button className="cancelButton" id="removeSourceProperty" onClick={this.stopAudio}>Stop</button>
            <button className="stopButton" id="removeSourceProperty" onClick={this.exitPage}>Exit</button>
          </div>
          <div>
            <div className="element">
              <audio className="audio-element" preload="auto">
                <source src="/files/NameAudio.mp3" ></source>
              </audio>
              <audio className="audio-element1" preload="auto">
                <source src="/files/2.mp3"></source>
              </audio>
              <audio className="audio-element2" preload="auto">
                <source src="/files/LevelAudio.mp3"></source>
              </audio>
              <audio className="audio-element3" preload="auto">
                <source src="/files/PerformanceAudio.mp3"></source>
              </audio>
              <audio className="audio-element4" preload="auto">
                <source src="/files/PerformanceSchoolAudio.mp3"></source>
              </audio>
              <audio className="audio-element5" preload="auto">
                <source src="/files/PerformanceDistrictAudio.mp3"></source>
              </audio>
              <audio className="audio-element6" preload="auto">
                <source src="/files/PerformanceStateAudio.mp3"></source>
              </audio>
              <audio className="audio-element7" preload="auto">
                <source src="/files/4.mp3"></source>
              </audio>
              <audio className="audio-element8" preload="auto">
                <source src="/files/YourStudentPerformance.mp3"></source>
              </audio>
              <audio className="audio-element9" preload="auto">
                <source src="/files/AdditionalResourceAudio.mp3"></source>
              </audio>
            </div>
          </div>
        </div>
      </>
    );
  }
}
