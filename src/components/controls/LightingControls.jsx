import {Heading, Separator} from "@chakra-ui/react";
import {Field} from "../ui/field";
import {Switch} from "../ui/switch";
import {Slider} from "../ui/slider";

function LightingControls(props) {
  return (
    <>
      <Heading size={`lg`} mb={`12px`}>Lighting</Heading>
      <Field label="Light switch" mb={`12px`}>
        <Switch
          colorPalette="teal"
          variant="solid"
          checked={props.light}
          onChange={props.updateLight}
        />
      </Field>

      <Field label="Light Intensity" mb={`12px`} />
      <Slider
        step={0.1}
        min={0.1}
        max={3}
        variant="solid"
        colorPalette="teal"
        defaultValue={[props.lightIntensity]}
        onChange={(e) => props.updateLightIntensity(e.target.value)}
        key={2}
        mb={`12px`}
      />

      <Separator mt={`12px`} mb={`12px`} />
    </>
  )
}

export default LightingControls;