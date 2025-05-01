// src/data/projects.ts

export interface ProjectEntry {
    id: string;
    title: string;
    period?: string;
    details: string;
    link?: string;
  }
  
  export const projectsData: ProjectEntry[] = [
    {
      id: "p1",
      title: "ESP8266-Based Automated Water Level Control and Pump Protection System",
      period: "Academic Project",
      details:
        "Microcontroller-based IoT system with automated pump control, false-trigger delay, dry-run protection, and optocoupler isolation for safety. Remote monitoring via ESP8266 WiFi module.",
    },
    {
      id: "p2",
      title: "Pediatric Pneumonia Prediction Using Deep Learning",
      period: "Academic Project",
      details:
        "Transfer-learning model with DenseNet-161 on chest X-rays, achieving 94% accuracy. Built with Python, PyTorch and data augmentation.",
    },
    {
      id: "p3",
      title: "Single-Cycle MIPS Processor Subset",
      period: "VLSI/FPGA Project",
      details:
        "Designed & simulated a MIPS CPU (fetch–decode–execute–memory–writeback) in Verilog, synthesized in Vivado, with arithmetic, memory and branch instructions.",
    },
    {
      id: "p4",
      title: "UART Communication Module",
      period: "VLSI/FPGA Project",
      details:
        "Developed UART TX/RX FSM modules (9600 baud) with start/stop bit detection and error checking; verified via waveform simulation.",
    },
    {
      id: "p5",
      title: "Digital System Components",
      period: "VLSI/FPGA Project",
      details:
        "Built Verilog modules: universal shift register, 8-bit register file, 4-bit ALU, priority encoder; comprehensive testbenches & timing analysis.",
    },
    {
      id: "p6",
      title: "State Machine Implementations",
      period: "VLSI/FPGA Project",
      details:
        "Moore FSMs: vending machine controller, traffic light controller, clock divider; all in Verilog with full testbench coverage.",
    },
  ];
  