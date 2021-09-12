import React from "react";
var PeerBoard = { cerateForum: () => {} };
if (process.browser) {
  PeerBoard = require("@peerboard/core");
}
import Head from "next/head";

// Settings -> Hosting -> Board ID
const boardID = "543970021";
// Settings -> Hosting -> Path Prefix
const baseURL = "https://peerboard.smartcoding.com";
const pathPrefix = "/";

class Community extends React.Component {
  containerRef = React.createRef();

  state = {
    error: null,
    loading: true,
  };

  constructor(props) {
    super(props);
  }

  async createPeerBoard() {
    const options = {
      // jwtToken,

      baseURL,

      prefix: pathPrefix,

      // Recommended setting so that the forum container
      // will always occupy all available space
      minHeight: window.innerHeight,

      // Update your page title according to the forum state
      onTitleChanged: (title) =>
        (window.document.title = "Your title " + title),

      // You can remove the loaded and forum will be showed to the user
      onReady: () =>
        this.setState({
          loading: false,
        }),

      onFail: () =>
        this.setState({
          error: "Failed to load forum...",
        }),
    };

    // Optional. Do this only if you want to implement seamless login https://community.peerboard.com/post/183197627?category=2097967386
    // Add auth token so the user will be authenticated when community is loaded
    // options.jwtToken = await http.post(
    //   "https://api.myapp.com/create-token-for-peerboard"
    // );

    if (typeof window !== "undefined") {
      PeerBoard.createForum(boardID, this.containerRef.current, options);
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.createPeerBoard().catch((err) =>
        this.setState({
          error: err.message,
        })
      );
    }
  }

  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500"
            rel="stylesheet"
            key="google-font-montserrat"
          />
        </Head>
        {this.state.error && this.state.error}
        {this.state.loading && "Loading..."}
        <div ref={this.containerRef}></div>
      </div>
    );
  }
}

export default Community;
