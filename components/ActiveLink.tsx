import Link from "next/link"
import { useRouter } from "next/router";

function ActiveLink({ children, href }) {

  const router = useRouter();
  const style = {
    marginRight: 30,
    textDecoration: 'underline',
    color: router.asPath === href ? '#0070f3' : 'black',
  }

  return( 
    <Link href={href} style={style}>{children}</Link>
  )
}


export default ActiveLink;