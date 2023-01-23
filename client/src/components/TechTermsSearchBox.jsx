import React from 'react';

const TechTermsSearchBox = () => {
    return (
        <div>
  <form
    action="https://techterms.com/search"
    method="get"
    id="techterms"
    style={{
      width: 245,
      textAlign: "center",
      border: "2px solid #00695C",
      borderRadius: 5,
      overflow: "hidden",
      marginRight: 25
    }}
  >
    <a
      href="https://techterms.com/"
      target="_blank"
      rel="noreferrer"
      style={{ display: "block" }}
    >
    </a>
    <div
      className="techterms_bottom"
      style={{
        display: "contents",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px"
      }}
    >
      <input
        type="text"
        name="term"
        id="term"
        placeholder="Search for a Tech Term"
        className="focus:width-100"
        style={{
          width: "calc(100% - 65px)",
          height: 30,
          boxSizing: "border-box",
          fontSize: 14,
          padding: "0 10px",
          border: "1px solid #009688",
          borderRadius: 5,
          verticalAlign: "middle",
          marginRight: 10,
          color: "#000000"
        }}
      />{" "}
      <input
        type="submit"
        name="submit"
        id="submit"
        defaultValue="Go"
        style={{
          width: 50,
          height: 30,
          fontSize: 14,
          color: "#FFF",
          background: "#00796B",
          border: "1px solid #00695C",
          borderRadius: 5,
          margin: 0,
          verticalAlign: "middle"
        }}
      />
    </div>
  </form>
</div>

    )
}

export default TechTermsSearchBox;