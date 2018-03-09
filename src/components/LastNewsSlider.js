import React, { Component } from "react"
import styled from "styled-components"

import image1 from "./slider/images/image1.jpg"
import image2 from "./slider/images/image2.jpg"
import image3 from "./slider/images/image3.jpg"
import image4 from "./slider/images/image4.jpg"
import image5 from "./slider/images/image5.jpg"

export default class LastNewsSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [image1, image2, image3, image4, image5],
      currentImage: image1,
      autoplayIndex: 0,
    }
  }

  componentDidMount() {
    this.autoplaySlider()
  }

  setCurrentImage = image => {
    this.autoplaySlider()

    this.setState({ currentImage: image })
  }

  changeCurrentImage = index => {
    this.autoplaySlider()

    const currentIndex = this.state.images.indexOf(this.state.currentImage) + index

    switch (currentIndex) {
      case -1:
        this.setState({ currentImage: this.state.images[4] })
        break
      case 5:
        this.setState({ currentImage: this.state.images[0] })
        break
      default:
        this.setState({ currentImage: this.state.images[currentIndex] })
    }
  }

  autoplaySlider = () => {
    clearTimeout(this.state.autoplayIndex)
    this.setState({ autoplayIndex: setTimeout(this.changeCurrentImage, 3000, 1) })
  }

  render() {
    const getDisplay = image => (image === this.state.currentImage ? "block" : "none")
    const getColor = image => (image === this.state.currentImage ? "#5bad5f" : "transparent")

    const Content = styled.div`
      width: 100%;
      height: 500px;
    `

    const Slider = styled.div`
      width: 100%;
      height: 500px;
      position: relative;
    `

    const Slide = styled.img`
      display: ${props => getDisplay(props.src)};
      width: 100%;
      height: 500px;
      object-fit: cover;
      animation: fading 3s infinite;

      @keyframes fading {
        0% {
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `

    const Mask = styled.div`
      background: linear-gradient(#0001, #0007);
      color: #fff;
      font-size: 2em;
      height: 500px;
      width: 100%;
      position: absolute;
      top: 0;
      cursor: pointer;
      display: ${props => getDisplay(props.src)};
    `

    const SliderLabel = styled.label`
      position: absolute;
      left: 50px;
      bottom: 50px;
      color: #fff;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    `

    const SliderNavigation = styled.div`
      margin: 0 auto;
      width: 100%;
      position: absolute;
      background-color: transparent;
      text-align: center;
      bottom: 0;
    `

    const Dot = styled.button`
      width: 20px;
      height: 20px;
      margin: 15px 5px;

      background-color: ${props => getColor(props.src)};
      border: 2px solid #fff;
      border-radius: 10px;
      cursor: pointer;

      :hover {
        background-color: #478e4a;
      }

      :active {
        border: 1px solid #447746;
      }
    `

    const SliderArrow = styled.button`
      margin: 10px;
      background-color: transparent;
      color: #5bad5fee;
      float: ${props => props.float};
      font-size: 1.5em;
      font-weight: bold;
      border: none;
      cursor: pointer;

      text-shadow: 1px 1px 0 #fff, -1px 1px #fff, -1px 0 #fff, -1px -1px #fff, 1px -1px #fff,
        2px 0px #fff;

      :hover {
        color: #478e4a;
      }

      :active {
        color: #447746;
      }
    `

    const SliderDots = this.state.images.map((image, idx) => (
      <Dot key={idx} src={image} onClick={() => this.setCurrentImage(image)} />
    ))

    const SliderImages = this.state.images.map((image, idx) => {
      return (
        <div key={idx}>
          <Slide src={image} />
          <Mask src={image} onClick={() => console.log("click on mask")}>
            <SliderLabel>label #{idx}</SliderLabel>
          </Mask>
        </div>
      )
    })

    return (
      <div>
        "Slider"
        <Content>
          <Slider style={{ "123": "456" }}>
            <div>{SliderImages}</div>

            <SliderNavigation>
              <SliderArrow float={"left"} onClick={() => this.changeCurrentImage(-1)}>
                &#10094;
              </SliderArrow>
              <SliderArrow float={"right"} onClick={() => this.changeCurrentImage(1)}>
                &#10095;
              </SliderArrow>
              {SliderDots}
            </SliderNavigation>
          </Slider>
        </Content>
      </div>
    )
  }
}
