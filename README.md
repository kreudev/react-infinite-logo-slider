
![Video](https://printeeds.s3.eu-central-1.amazonaws.com/next-s3-uploads/420850c1-8958-4054-9f18-ef09021bd9eb/4913d100e73f323dc1288455e94ff946.gif)


# Infinite logo slider
## Installation

Install with npm

```bash
  npm install react-infinite-logo-slider
```
    
## Usage/Examples

```javascript
import Slider from 'react-infinite-logo-slider'

const Component = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/slider/any.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <div>
                    Other component...
                </div>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Component
```


## Slider props

```javascript
  <Slider
    width="200px"
    duration={40}
    toRight={false}
    pauseOnHover={false}
    blurBorders={false}
    blurBoderColor={'#fff'}
  >
    ...
  </Slider>
```

| Prop | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `width`      | `string` |  `200px` | **Required** - Width of the ITEM | 
| `duration`      | `number` |  `40` | The speed with which it moves (in seconds) |
| `toRight`      | `boolean` |  `false` | It moves in the right direction |
| `pauseOnHover`      | `boolean` |  `false` | The animation pauses on hover |
| `blurBorders`      | `boolean` |  `false` | A blur effect will appear at the ends of the slider |
| `blurBoderColor`      | `string` |  `#fff` | Color of blur |


## Slide props

```javascript
  <Slider.Slide
    id="sliderId"
    key="any_key"
    className="awesome_classname ...",
    ...
  >
    ...
  </Slider.Slide>
```

| Prop | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `props`      | `any` |  You can pass any props to this. |

