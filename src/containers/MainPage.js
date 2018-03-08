import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Slider from "react-slick"
// @import "~slick-carousel/slick/slick.css";

// import { LastNewsSlider } from "../components"
import * as Actions from "../actions"
import LastNewsSlider from "../components/LastNewsSlider"

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// }

const MainPage = ({ actions, activePage }) => (
  <div>
    Main Page
    <LastNewsSlider />
  </div>
)

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.router.activePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
