import {Heading, HStack} from "@chakra-ui/react";
import {Field} from "../ui/field";
import {Slider} from "../ui/slider";
import {Radio, RadioGroup} from "../ui/radio";
import {TwitterPicker} from 'react-color';


function TriangleControls(props) {
  return (
    <>
      <Heading size={`lg`} mb={`12px`}>Pyramid</Heading>

      <Field label="Width" mb={`12px`} />
      <Slider
        step={0.1}
        min={0.1}
        max={3}
        variant="solid"
        colorPalette="teal"
        defaultValue={[props.pyWidth]}
        onChange={(e) => props.updatePyWidth(e.target.value)}
        mb={`12px`}
      />

      <Field label="Height" mb={`12px`} />
      <Slider
        step={0.1}
        min={0.1}
        max={3}
        variant="solid"
        colorPalette="teal"
        defaultValue={[props.pyHeight]}
        onChange={(e) => props.updatePyHeight(e.target.value)}
        mb={`12px`}
      />

      <Field label="Mesh Type" mb={`12px`} />
      <RadioGroup value={props.meshType} onValueChange={(e) => props.updateMeshType(e.value)}>
        <HStack gap="6">
          <Radio value="texture" colorPalette="teal">Texture</Radio>
          <Radio value="color" colorPalette="teal">Color</Radio>
        </HStack>
      </RadioGroup>

      {props.meshType === "color" && (
        <Field label="Mesh Color" mb={`12px`} mt={`12px`}>
          <TwitterPicker
            color={props.meshColor}
            onChangeComplete={(e) => {
              props.updateMeshColor(e.hex)
            }}
          />
        </Field>
      )}

      {props.meshType === "texture" && (
        <div>
          <Field label="Mesh Texture" mb={`12px`} mt={`12px`} />
          <RadioGroup value={props.meshTexture} onValueChange={(e) => props.updateMeshTexture(e.value)}>
            <HStack gap="6">
              <Radio value="paper" colorPalette="teal">Paper</Radio>
              <Radio value="linen" colorPalette="teal">Linen</Radio>
              <Radio value="brick" colorPalette="teal">Brick</Radio>
            </HStack>
          </RadioGroup>
        </div>
      )}
    </>
  )
}

export default TriangleControls;