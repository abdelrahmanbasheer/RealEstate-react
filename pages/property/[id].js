import {Box,Flex,Spacer,Text,Avatar} from "@chakra-ui/react"
import {FaBed,FaBath} from "react-icons/fa"
import {bsGridFill} from "react-icons/bs"
import {GoVerified } from "react-icons/go"
import {millify} from "millify"
import {baseUrl,fetchApi} from "../../utils/fetchApi"
import ImageScrollbar from "../../components/ImageScrollbar"

const PropertyDetails= ({propertyDetails:{ price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}})=>(
    
    <Box maxWidth="1000px" m="auto" p="4">
        {photos && <ImageScrollbar data={photos}></ImageScrollbar>}
    <Box w="full" p="6" >
    <Flex pt="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
    <Box pr="3" color="green.400" >
{isVerified &&<GoVerified></GoVerified>}
    </Box>
    <Text fontWeight="bold" fontSize="large">{millify(price)} EGP {rentFrequency&& `/${rentFrequency.slice(0,5)}`}</Text>
        </Flex>
        <Box>
            <Text fontWeight="bold" ml="110">{agency.name} </Text>
            <Avatar ml="200" size="2xl" src={agency?.logo?.url} ></Avatar>

            
        </Box>

    </Flex>
    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px"  >
    {rooms} <FaBed color="black"></FaBed> | {baths} <FaBath color="#17A4B0"></FaBath> | {millify(area)} sqft <bsGridFill></bsGridFill>

    </Flex>
    <Box mt="2">
<Text ml="250px" mb="2" fontWeight="bold" fontSize="2xl">
 {title}
    </Text>
<Text color="gray.600">
{description}
</Text>

</Box>
<Flex mt="30px" flexWrap="center" textTransform="uppercase" justifyContent="space-between">
    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
    <Text fontWeight="bold">Type :</Text>
    <Text fontWeight="bold" >{type}</Text>

    </Flex>
    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
    <Text fontWeight="bold">Purpose :</Text>
    <Text fontWeight="bold" >{purpose}</Text>

    </Flex>
{furnishingStatus && (<Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
    <Text fontWeight="bold">furnishing Status :</Text>
    <Text fontWeight="bold" >{furnishingStatus}</Text>

    </Flex>) }
</Flex>
<Box>
      {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.100' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box>
 
    </Box>
    </Box>
);

export default PropertyDetails


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
  }