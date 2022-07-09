import Link from "next/link"
import Image from "next/image"
import {Box,Flex,Text,Avatar} from "@chakra-ui/react"
import {FaBed,FaBath} from "react-icons/fa"
import {bsGridFill} from "react-icons/bs"
import {GoVerified } from "react-icons/go"
import {millify} from "millify"
import DefaultImage from "../assets/house.jpg"

const Property = ({property:{ coverPhoto,price ,rentFrequency,rooms,title,baths,area,agency,isVerified,exeternalId}})=>(
    <Link href={`/property/${exeternalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" pt="0" justifyContent="flex-start" cursor="pointer">
    <Box>
        <Image src={coverPhoto? coverPhoto.url : DefaultImage } width="400px" height="260px" alt="house">

        </Image>
    </Box>
    <Box w="full">
    <Flex pt="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
    <Box pr="3" color="green.400" >
{isVerified &&<GoVerified></GoVerified>}
    </Box>
    <Text fontWeight="bold" fontSize="large">{millify(price)} EGP {rentFrequency&& `/${rentFrequency.slice(0,5)}`}</Text>
        </Flex>
        <Box>
            <Avatar  src={agency?.logo?.url}/>

            
        </Box>

    </Flex>
    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" >
    {rooms} <FaBed color="black"></FaBed> | {baths} <FaBath color="#17A4B0"></FaBath> | {millify(area)} sqft <bsGridFill></bsGridFill>

    </Flex>
    <Text fontSize="lg">
 {title.length> 30 ? `${title.substring(0,30)}...` : title}
    </Text>
    </Box>
        </Flex>
    </Link>
)
export default Property