import React from "react";
import html2pdf from "html2pdf.js";
import "./App.css";

class App extends React.Component {
  handlePdfConversion = () => {
    // Get the HTML element that you want to convert to PDF
    const element = document.getElementById("my-element");

    // Set the options for the PDF conversion
    const options = {
      filename: "web.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Convert the HTML element to PDF
    html2pdf().from(element).set(options).save();
  };

  render() {
    return (
      <div className="heading">
        <h1>Web Page convertor to PDF</h1>
        <p>web page below content will converted in pdf</p>
        <button className="btn" onClick={this.handlePdfConversion}>
          Convert to PDF <i className="fa fa-file-pdf-o"></i>
        </button>
        <div id="my-element">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
