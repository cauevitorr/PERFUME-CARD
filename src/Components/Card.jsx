import { DivText,DivSale, DivImg, Main, Text01, Text02,Text03,Text04,Text05,Button } from '../Styles/Card.js'
const Card = () => {
 return (
   <Main>
    <DivImg src='../../images/image-product-desktop.jpg' />
    <DivSale>
     <Text01>PERFUME</Text01>
     <Text02>Gabrielle Essence Eau De Parfum</Text02>
     <Text03> A floral, solar and coluptuos interpretation composed by Oliver Polge, Perfum-Creator for the House of Chanel</Text03>
     <DivText>
     <Text04>$149.99</Text04>
     <Text05>$169.99</Text05>
     </DivText>
     <Button></Button>
    </DivSale>
   </Main>
 )
}
export default Card
