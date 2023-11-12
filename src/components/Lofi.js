import React, { useState } from "react";
import { Box, Center, SimpleGrid, Container } from "@chakra-ui/react";
import Card from "./Card";
import { Tooltip } from '@chakra-ui/react'

export default function Lofi() {
  const [currentAudio, setCurrentAudio] = useState(null);       //tracks the current song
  const [shuffleButtonClicked,setShuffleButtonClicked] = useState(false)
  const [info, setinfo] = useState([
    {
      id: "1",
      image: "./image/Lofi-1.jpg",
      sound: "./sound/Lofi-empty-mind.mp3",
      tag: "Empty Mind",
    },
    {
      id: "2",
      image: "./image/Lofi-weekend.jpg",
      sound: "./sound/Lofi-the-weekend.mp3",
      tag: "The weekend",
    },
    {
      id: "3",
      image: "./image/Lofi-study.jpg",
      sound: "./sound/Lofi1.mp3",
      tag: "Lofi Study",
    },
    {
      id: "4",
      image: "./image/Lofi-coding.jpg",
      sound: "./sound/Lofi-coding-night.mp3",
      tag: "Lofi Coding night",
    },
    {
      id: "5",
      image: "./image/Lofi-cat.avif",
      sound: "./sound/Lofi-sleepy-cat.mp3",
      tag: "Lofi Sleepy Cat",
    },
    {
      id: "6",
      image: "./image/spring-lofi.jpeg",
      sound: "./sound/spring-of-mind.mp3",
      tag: "Spring Mind",
    },
    {
      id: "7",
      image: "./image/Lofi-chilling-vibe.jpeg",
      sound: "./sound/Lofi-chill-vibes.mp3",
      tag: "Chilling Vibe",
    },
    {
      id: "8",
      image: "./image/lofi-meditation.jpeg",
      sound: "./sound/lofi-meditation.mp3",
      tag: "Meditation",
    },
    {
      id: "9",
      image: "./image/lofi-relaxation.jpg",
      sound: "./sound/lofi-relaxation.mp3",
      tag: "Relaxation",
    },
    {
      id: "10",
      image: "./image/lofi-study.jpeg",
      sound: "./sound/lofi-study.mp3",
      tag: "Study",
    },
  ]);

  const handleShuffleClick = () =>{
    setShuffleButtonClicked(!shuffleButtonClicked)
  }

  return (
    <>
    <Container maxW={"100%"} bg={"#EFEAD8"}>
      <Box maxW={"100%"}>
      <Center>
        <SimpleGrid columns={[1, 2, 3]}>
          {info && info.map((post) => <Card key={post.id} index={post.id} {...post} shuffleButtonClicked={shuffleButtonClicked}  currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} multi={false}/>)}
        </SimpleGrid>
      </Center>
    </Box>
    </Container>
    <Box
        position="sticky"
        bottom={8}
        marginRight={[4,6,8]}
        marginBottom={[2,4]}
        display="flex"
        justifyContent="flex-end"
      >
    <Tooltip label='Surprise Me ✨'>
          <Box
            bg={"gray.400"}
            variant="solid"
              borderRadius="full"
              py="2"
              px="2"
              onClick={() => handleShuffleClick()}
              // purple
              // bgGradient="linear(to top, #9795f0 0%, #fbc8d4 100%)"
              //teal
              bgGradient="linear(-225deg, #B7F8DB 0%, #50A7C2 100%)"
              cursor="pointer"
            >
            <svg
              width="35px"
              height="35px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20 5l2 2-2 2M22 18c-3 0-8.5 0-10.5-5.5S5 7 2 7"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20 20l2-2-2-2"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Box>
        </Tooltip>
      </Box>
    </>
  );
}
