import Link  from "next/link"
import {Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer, transition} from "@chakra-ui/react"
import {FcMenu,FcHome,FcAbout} from "react-icons/fc"
import {BsSearch} from "react-icons/bs"
import {FiKey} from "react-icons/fi"
import { useMediaQuery } from "@chakra-ui/react"

const Navbar= ()=>{
    const [isSmallScreen] = useMediaQuery("(max-width: 768px)")
    return(
   
<Flex p="2" borderBottom="1px" borderColor="gray.100">
<Box fontSize={{lg:"3xl",md:"xl",sm:"medium"}} color="blue.400" fontWeight="bold">
<Link href="/" paddingLeft="2" >EMAAR PROPERTIES
</Link>
</Box>
<Spacer/>
{
    isSmallScreen ?
     <Box>
    <Menu>
        <MenuButton as={IconButton} icon={<FcMenu/>} var="outline" color="red.400">  </MenuButton>
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout/>}>Buy properties</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey/>}>Rent properties</MenuItem>
                </Link>
            </MenuList>
      
    </Menu> 
</Box>
:
<Flex gap="3" >
<Link href="/" passHref>
    
<Box fontSize="2xl" cursor="pointer" _hover={{
    color:'#1e86f1',
    transition: "color 0.2s"
}}
 fontWeight="bold" m="3">Home</Box>
</Link>
<Link href="/search" passHref>
<Box fontSize="2xl" cursor="pointer" _hover={{
    color:'#1e86f1',
    transition: "color 0.2s"
}} fontWeight="bold"m="3">Search</Box>
</Link>
<Link href="/search?purpose=for-sale" passHref>
<Box fontSize="2xl" cursor="pointer" _hover={{
    color:'#1e86f1',
    transition: "color 0.2s"
}} fontWeight="bold" m="3">Buy Props.</Box>
</Link>
<Link href="/search?purpose=for-rent" passHref>
<Box fontSize="2xl" cursor="pointer" _hover={{
    color:'#1e86f1',
    transition: "color 0.2s"
}} fontWeight="bold" m="3">Rent Props. </Box>
</Link>
</Flex>

}


</Flex>
    )
};

export default Navbar