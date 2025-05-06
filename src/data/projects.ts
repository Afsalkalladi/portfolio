// src/data/projects.ts

export interface ProjectEntry {
  id: string;
  title: string;
  period?: string;
  details: string;
  technologies?: string[];
  tags?: string[];
  bulletPoints?: string[];
  link?: string;
  image?: string;
}

export const projectsData: ProjectEntry[] = [
  {
    id: "p1",
    title: "ESP8266-Based Automated Water Level Control and Pump Protection System",
    period: "Academic Project",
    details:
      "Microcontroller-based IoT system with automated pump control, false-trigger delay, dry-run protection, and optocoupler isolation for safety. Remote monitoring via ESP8266 WiFi module.",
    technologies: ["ESP8266", "IoT", "Embedded C", "Sensor Integration", "Wi-Fi"],
    tags: ["IoT", "Embedded Systems"],
    bulletPoints: [
      "Automated pump control with dry-run protection",
      "False-trigger filtering and optocoupler isolation",
      "Remote monitoring using Wi-Fi and mobile dashboard"
    ],
    image: "/images/projects/water-control.png"
  },
  {
    id: "p2",
    title: "Pediatric Pneumonia Prediction Using Deep Learning",
    period: "Academic Project",
    details:
      "Transfer-learning model with DenseNet-161 on chest X-rays, achieving 94% accuracy. Built with Python, PyTorch and data augmentation.",
    technologies: ["Python", "PyTorch", "DenseNet", "Deep Learning", "Medical Imaging"],
    tags: ["Machine Learning", "Healthcare"],
    bulletPoints: [
      "Used DenseNet-161 on labeled chest X-ray dataset",
      "Achieved 94% classification accuracy",
      "Implemented data augmentation to reduce overfitting"
    ],
    image: "/images/projects/pneumonia-detection.png"
  },
  {
    id: "p3",
    title: "Single-Cycle MIPS Processor Subset",
    period: "VLSI/FPGA Project",
    details:
      "Designed & simulated a MIPS CPU covering the full instruction cycle in Verilog. Synthesized in Vivado targeting FPGA, supporting arithmetic, memory, and control instructions.",
    technologies: ["Verilog", "Vivado", "MIPS", "FPGA", "Digital Logic"],
    tags: ["VLSI", "Computer Architecture"],
    bulletPoints: [
      "Single-cycle execution of fetch-decode-execute-memory-writeback",
      "Supports arithmetic, load/store, and branch instructions",
      "Fully synthesized and tested in Vivado"
    ],
    image: "/images/projects/mips-processor.png"
  },
  {
    id: "p4",
    title: "UART Communication Module",
    period: "VLSI/FPGA Project",
    details:
      "Developed UART TX/RX FSM modules (9600 baud) with start/stop bit detection and error checking; verified via waveform simulation.",
    technologies: ["Verilog", "UART", "FSM", "Waveform Simulation"],
    tags: ["VLSI", "Communication Protocols"],
    bulletPoints: [
      "Designed TX/RX UART modules with FSM",
      "Handled start/stop bit detection and framing errors",
      "Validated via simulation using testbenches"
    ],
    image: "/images/projects/uart-module.png"
  },
  {
    id: "p5",
    title: "Digital System Components",
    period: "VLSI/FPGA Project",
    details:
      "Built Verilog modules: universal shift register, 8-bit register file, 4-bit ALU, priority encoder; comprehensive testbenches & timing analysis.",
    technologies: ["Verilog", "Digital Logic", "Testbenching", "Timing Analysis"],
    tags: ["VLSI", "Digital Circuits"],
    bulletPoints: [
      "Designed ALU, register file, shift register, encoder in Verilog",
      "Comprehensive testbench coverage for all modules",
      "Performed functional and timing validation"
    ],
    image: "/images/projects/digital-components.png"
  },
  {
    id: "p6",
    title: "State Machine Implementations",
    period: "VLSI/FPGA Project",
    details:
      "Moore FSMs: vending machine controller, traffic light controller, clock divider; all in Verilog with full testbench coverage.",
    technologies: ["Verilog", "FSM", "Digital Design", "Simulation"],
    tags: ["VLSI", "Finite State Machines"],
    bulletPoints: [
      "Implemented Moore FSMs for common control applications",
      "Used Verilog modules with testbenches",
      "Tested using simulation for full-state coverage"
    ],
    image: "/images/projects/state-machines.png"
  }
];
