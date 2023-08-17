import Link from "next/link"
import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  
  const router = useRouter();
  const style = {
    marginRight: 30,
    color: router.asPath === href ? '#0070f3' : 'black',
    textDecoration: router.asPath === href ? 'underline' : '',
  }
  console.log(router);

  return( 
    <Link href={href} style={style}>{children}</Link>
  )
}


export default ActiveLink;