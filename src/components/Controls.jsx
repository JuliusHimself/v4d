import { Button, Heading } from "@chakra-ui/react";
import '../sass/Controls.scss';

function Controls(props) {
  return (
    <div className={`controls`}>
      <Heading size={`2xl`}>Controls</Heading>
      <div className="controls-container">
        <div className="control">
          <Heading size={`xl`}>Lighting</Heading>

        </div>
        <div className="control">
          <Heading size={`xl`}>Triangle</Heading>
        </div>
      </div>


      <Button
        colorPalette="teal"
        variant="solid"
        onClick={props.updateLight}
      >
        Turn light {props.light ? 'off' : 'on'}
      </Button>
    </div>
  )
}

export default Controls;