
import Link from "next/link"
import Image from "next/image"
import {Flex,Box,Text,Button} from "@chakra-ui/react"
import {baseUrl,fetchApi} from "../utils/fetchApi"
import Property from "../components/Property"
const Banner =({purpose,title1,title2,desc1,desc2,linkName,buttonText,imageUrl})=>(
  <Flex flex-wrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"></Image>
<Box p="5">
<Text color="gray.500" fontSize="sm" fontWeight="medium ">
{purpose}
</Text>
<Text  fontSize="3xk" fontWeight="bold ">
{title1}<br></br>{title2}
</Text>
<Text fontSize="large" color="gray.700" pt="3px" pb="3px">
{desc1}<br></br>{desc2}
</Text>
<Button fontSize="xl" >
<Link href={linkName}>{buttonText}</Link>
</Button>
</Box>
   
  </Flex>
)

export default function Home({propertyForsale,propertyForRent}) {
  console.log(propertyForRent,propertyForsale);
  return (
    <Box >
<Banner purpose={"RENT A HOME"}
 title1={"rental home for "}
  title2={"everyone"} 
  desc1={"explore apartments ,Villas,Homes"} 
  desc2={"and more"} 
  buttonText={"explore renting "}
   linkName="/search?purpose=for-rent"
    imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
<Flex flexWrap="wrap">
{propertyForRent.slice(0,6).map((property)=>(
  <Property property={property} key={property.id}></Property>
))}
</Flex>
<Banner  purpose={"BUY A HOME"}
 title1={"find,buy, and own "}
  title2={"your dream home"} 
  desc1={"explore apartments ,Villas,Homes"}
   desc2={"and more"} buttonText={"explore buying options "} 
   linkName="/search?purpose=for-sale"
    imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" />
{propertyForsale.slice(0,6).map((property)=>(
  <Property property={property} key={property.id}></Property>
))}
    </Box>
  )
}

export async function getStaticProps(){
const propertyForsale=await  fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6}`)
const propertyForRent=await  fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6}`)
return{
  props:{
    propertyForsale:propertyForsale?.hits,
   propertyForRent: propertyForRent?.hits,
  } 

}
}
