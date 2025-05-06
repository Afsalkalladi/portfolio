// Define the ProjectEntry type and export it
export interface ProjectEntry {
  id: string;
  title: string;
  period: string;
  details: string;
  technologies: string[];
  tags: string[];
  bulletPoints: string[];
  image: string;
  link?: string; // Optional project link
}

export const projectsData: ProjectEntry[] = [
  {
    id: "p1",
    title: "ESP8266-Based Automated Water Level Control and Pump Protection System",
    period: "Academic Project",
    details:
      "Designed and implemented a smart IoT-based water management system to automate pump control based on tank levels. Integrated sensor-driven logic for dry-run protection, false-trigger filtering, and optocoupler-based isolation to ensure high-voltage safety. Enabled remote monitoring and control via Wi-Fi using the ESP8266 module.",
    technologies: ["ESP8266", "IoT", "Embedded C", "Sensor Integration", "Wi-Fi"],
    tags: ["IoT", "Embedded Systems"],
    bulletPoints: [
      "Automated pump control with sensor-based dry-run detection and delay mechanisms",
      "Implemented optocoupler isolation for controller protection in high-voltage circuits",
      "Enabled wireless remote monitoring via ESP8266 and dashboard interface"
    ],
    image: "/images/projects/water-control.png"
  },
  {
    id: "p2",
    title: "Pediatric Pneumonia Prediction Using Deep Learning",
    period: "Academic Project",
    details:
      "Developed a deep learning solution for early detection of pediatric pneumonia using chest X-ray images. Leveraged transfer learning with DenseNet-161 and applied advanced image preprocessing and data augmentation techniques to improve model robustness. Achieved high diagnostic accuracy through extensive model tuning and evaluation.",
    technologies: ["Python", "PyTorch", "DenseNet", "Deep Learning", "Medical Imaging"],
    tags: ["Machine Learning", "Healthcare"],
    bulletPoints: [
      "Applied DenseNet-161 to classify X-ray images as pneumonia or normal",
      "Achieved 94% classification accuracy with optimized hyperparameters",
      "Used transfer learning and augmentation to address dataset limitations"
    ],
    image: "/images/projects/pneumonia-detection.png"
  },
  {
    id: "p3",
    title: "Single-Cycle MIPS Processor Subset",
    period: "VLSI/FPGA Project",
    details:
      "Architected and simulated a single-cycle MIPS processor in Verilog HDL, supporting a subset of instructions for arithmetic, memory access, and control flow. Modeled the complete fetch-decode-execute-memory-writeback pipeline. Synthesized the design using Vivado for FPGA deployment and resource utilization analysis.",
    technologies: ["Verilog", "Vivado", "MIPS", "FPGA", "Digital Logic"],
    tags: ["VLSI", "Computer Architecture"],
    bulletPoints: [
      "Designed complete single-cycle MIPS pipeline supporting core instruction set",
      "Verified processor behavior using functional simulation and test programs",
      "Synthesized and analyzed hardware resource usage on FPGA using Vivado"
    ],
    image: "/images/projects/mips-processor.png"
  },
  {
    id: "p4",
    title: "UART Communication Module",
    period: "VLSI/FPGA Project",
    details:
      "Created UART transmitter and receiver modules in Verilog using finite state machines, enabling serial communication at 9600 baud. Developed logic for start/stop bit handling, data framing, and basic error detection. Validated functionality through comprehensive waveform simulation using testbenches.",
    technologies: ["Verilog", "UART", "FSM", "Waveform Simulation"],
    tags: ["VLSI", "Communication Protocols"],
    bulletPoints: [
      "Built UART TX/RX modules with precise state-based control flow",
      "Included error detection and data framing logic for robustness",
      "Verified all scenarios via waveform simulations and testbench validation"
    ],
    image: "/images/projects/uart-module.png"
  },
  {
    id: "p5",
    title: "Digital System Components",
    period: "VLSI/FPGA Project",
    details:
      "Engineered a suite of essential digital logic components in Verilog including a universal shift register, register file, ALU, and priority encoder. Each module was rigorously tested using modular testbenches, ensuring correct logical behavior and timing performance across all operational modes.",
    technologies: ["Verilog", "Digital Logic", "Testbenching", "Timing Analysis"],
    tags: ["VLSI", "Digital Circuits"],
    bulletPoints: [
      "Designed and simulated reusable digital modules with modular architecture",
      "Implemented testbenches for functionality and corner-case validation",
      "Analyzed timing and logical correctness for integration in larger systems"
    ],
    image: "/images/projects/digital-components.png"
  },
  {
    id: "p6",
    title: "State Machine Implementations",
    period: "VLSI/FPGA Project",
    details:
      "Implemented multiple Moore state machines in Verilog for real-world applications including a vending machine controller, traffic light system, and programmable clock divider. Ensured full-state test coverage with thorough simulation and verification strategies using waveform analysis.",
    technologies: ["Verilog", "FSM", "Digital Design", "Simulation"],
    tags: ["VLSI", "Finite State Machines"],
    bulletPoints: [
      "Developed Moore FSMs for control logic scenarios in embedded applications",
      "Created modular, testable Verilog code with clearly defined state transitions",
      "Validated timing and logic flow using waveform simulation tools"
    ],
    image: "/images/projects/state-machines.png"
  }
];