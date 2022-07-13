import { Box ,Text,Flex, Button, Spacer} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import errorimage from "../assets/004.jpg"

const Notfound = () => {
  return (
    <Flex margin="20" alignItems="center" justifyContent="center" gap="2">
    
        <Text textTransform="capitalize" fontWeight="bold">oops looks like what you're looking for doesn't exist</Text>
        
        <Link href="/"><Button variant="outline" textTransform="capitalize">return home </Button></Link>
        
        
    </Flex>
  )
}

export default Notfound