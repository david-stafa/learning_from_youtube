import { useState } from "react";
import { Linkedin } from "react-feather"
import Link from "next/link";

export default function Contact(){

    return (
    <div>
        <p> Contact</p>
        <Link href="https://www.linkedin.com/in/david-stafa/">
            <Linkedin />   
        </Link>
    </div>
    )
}