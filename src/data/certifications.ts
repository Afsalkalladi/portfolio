export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon: string;
  type: string;
  link?: string;
}

export const certificationsData: CertificationEntry[] = [
  // {
  //   id: "c1",
  //   title: "VLSI CAD: Logic to Layout",
  //   issuer: "University of Illinois at Urbana-Champaign (Coursera)",
  //   date: "2024",
  //   description:
  //     "A deep dive into the world of Very Large Scale Integration (VLSI) Computer-Aided Design (CAD) tools. Covered the complete digital IC design flow, including logic synthesis, placement, routing, and timing analysis. Explored modern algorithms for optimizing design performance and power efficiency, with hands-on design exercises using academic tools.",
  //   icon: "/icons/vlsi.ico",
  //   type: "Online",
  // },
  {
    id: "c2",
    title: "Introduction to FPGA Design for Embedded Systems",
    issuer: "University of Colorado Boulder (Coursera)",
    date: "2024",
    description:
      "Explored the architecture and inner workings of Field Programmable Gate Arrays (FPGAs) with a strong focus on embedded system applications. Gained practical experience in HDL coding, simulation, and synthesis using tools like Xilinx Vivado. Designed basic digital components and integrated them into larger systems using modular and hierarchical design principles.",
    icon: "/icons/fpga.ico",
    type: "Online",
  },
  // {
  //   id: "c3",
  //   title: "Hardware Description Languages for FPGA Design",
  //   issuer: "University of Colorado Boulder (Coursera)",
  //   date: "2024",
  //   description:
  //     "Comprehensive study of Verilog and VHDL for modeling and simulating digital circuits. Focused on writing synthesizable code for sequential and combinational circuits, creating testbenches, debugging simulation waveforms, and applying FSM-based design techniques. Final projects included building reusable, parameterized components for FPGA-based applications.",
  //   icon: "/icons/hdl.ico",
  //   type: "Online",
  // },
  {
    id: "c4",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "2024",
    description:
      "Earned professional certification from Oracle in deploying and managing Generative AI solutions using Oracle Cloud Infrastructure (OCI). Topics included large language model (LLM) integration, AI services deployment, OCI AI workflows, and ethical considerations in enterprise AI development. Demonstrated proficiency through real-world case studies and hands-on labs.",
    icon: "/icons/oracle.png",
    type: "Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F0BA6287D162700E99E491A3363AB95FE49E4C2017F0C98DA4D3BD46A5F19FB7"
  },
  {
    id: "c5",
    title: "Introduction to Python for Cybersecurity",
    issuer: "Infosec",
    date: "2024",
    description:
      "An introductory yet comprehensive course covering the application of Python programming to the cybersecurity domain. Learned to automate routine security tasks, write scripts for data parsing, network packet analysis, vulnerability scanning, and exploit research. Focused on integrating Python tools into the penetration testing workflow.",
    icon: "/icons/python.png",
    type: "Online",
    link: "https://www.coursera.org/account/accomplishments/verify/HLHEXVS8XA3P"
  },
  {
    id: "c6",
    title: "Web Application Technologies and Django",
    issuer: "University of Michigan (Coursera)",
    date: "2024",
    description:
      "Focused on full-stack web development using Python and the Django framework. Covered HTTP, REST APIs, routing, templates, form processing, user authentication, and deployment. Built end-to-end web applications with PostgreSQL integration, applying MVC patterns and best practices for secure, maintainable code.",
    icon: "/icons/django.svg",
    type: "Online",
    link: "https://www.coursera.org/account/accomplishments/verify/JNLT8NGA5SNR"
  },
  {
    id: "c7",
    title: "Cloud Computing with AWS",
    issuer: "DevTown",
    date: "2024",
    description:
      "Hands-on certification workshop introducing Amazon Web Services and cloud computing fundamentals. Covered key services including EC2, S3, IAM, Lambda, and RDS. Demonstrated use cases through cloud-native application deployment, infrastructure automation with AWS CLI, and basic DevOps pipeline integration.",
    icon: "/icons/aws.png",
    type: "Workshop",
    link: "https://www.cert.devtown.in/verify/3zWo0"
  },
  {
    id: "c8",
    title: "Ethical Hacking Associate",
    issuer: "RedTeam Academy",
    date: "2024",
    description:
      "Practical certification program focused on ethical hacking principles, tools, and techniques. Covered reconnaissance, vulnerability analysis, exploitation, and reporting. Emphasized hands-on exposure to tools like Nmap, Metasploit, Burp Suite, and Wireshark in simulated environments.",
    icon: "/icons/eth.ico",
    type: "Certification",
    link: "https://360.redteamacademy.com/course/certverify/PW8AOTHJJT"
  }
  
];
