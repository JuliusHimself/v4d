"use client"

import {Heading, Separator} from "@chakra-ui/react";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "./ui/drawer"
import { useState } from "react";
import '../sass/Controls.scss';
import {Button} from "./ui/button";
import LightingControls from "./controls/LightingControls";
import TriangleControls from "./controls/TriangleControls";

function Controls(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`controls`}>
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerTrigger asChild>
          <Button variant="solid" size="sm" colorPalette="teal">
            {!open ? "Show" : "Hide"} Controls
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <Heading size={`2xl`}>Controls</Heading>
          </DrawerHeader>
          <Separator />
          <DrawerBody>
            <LightingControls
              light={props.light}
              lightIntensity={props.lightIntensity}
              updateLight={props.updateLight}
              updateLightIntensity={props.updateLightIntensity}
            />

            <TriangleControls
              pyWidth={props.pyWidth}
              pyHeight={props.pyHeight}
              updatePyWidth={props.updatePyWidth}
              updatePyHeight={props.updatePyHeight}
              meshType={props.meshType}
              updateMeshType={props.updateMeshType}
              meshColor={props.meshColor}
              updateMeshColor={props.updateMeshColor}
              meshTexture={props.meshTexture}
              updateMeshTexture={props.updateMeshTexture}
            />
          </DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </div>
  )
}

export default Controls;