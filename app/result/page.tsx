'use client'
import Header from "@/app/component/Header";

const studentInfo = {
    enrollment: "08015002824",
    name: "ABHAY LALIT DESHMUKH",
    institute: "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY",
    program:
        "BACHELOR OF TECHNOLOGY (ELECTRONICS AND COMMUNICATIONS ENGINEERING)",
    batch: "2024",
    admissionYear: "2024",
};

const results = [
    {
      sem: 3,
      code: "ES201",
      subject: "COMPUTATIONAL METHODS",
      internal: 32,
      external: 15,
      total: 47,
    },
    {
      sem: 3,
      code: "HS203",
      subject: "INDIAN KNOWLEDGE SYSTEM",
      internal: "-",
      external: 60,
      total: 60,
    },
    {
      sem: 3,
      code: "ECC205",
      subject: "SIGNAL AND SYSTEM",
      internal: 28,
      external: 15,
      total: 43,
    },
    {
      sem: 3,
      code: "ECC207",
      subject: "DIGITAL LOGIC AND COMPUTER DESIGN",
      internal: 31,
      external: 19,
      total: 50,
    },
    {
      sem: 3,
      code: "ECC209",
      subject: "ANALOG COMMUNICATIONS",
      internal: 29,
      external: 18,
      total: 47,
    },
    {
      sem: 3,
      code: "ECC211",
      subject: "ANALOG ELECTRONICS-I",
      internal: 28,
      external: 16,
      total: 44,
    },
    {
      sem: 3,
      code: "ES251",
      subject: "COMPUTATIONAL METHODS LAB",
      internal: 30,
      external: 52,
      total: 82,
    },
    {
      sem: 3,
      code: "ECC253",
      subject: "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
      internal: 28,
      external: 50,
      total: 78,
    },
    {
      sem: 3,
      code: "ECC255",
      subject: "ANALOG COMMUNICATIONS LAB",
      internal: 32,
      external: 51,
      total: 83,
    },
    {
      sem: 3,
      code: "ECC257",
      subject: "ANALOG ELECTRONICS-I LAB",
      internal: 28,
      external: 44,
      total: 72,
    },
    {
      sem: 3,
      code: "ECC259",
      subject: "SIGNAL AND SYSTEM LAB",
      internal: 30,
      external: 49,
      total: 79,
    },
  ];
  

export default function ResultPage() {
    return (




        <>

        <Header />

        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Student Info Card */}
                <div className="bg-white rounded-xl shadow-sm border-l-4 border-indigo-500 p-6 grid grid-cols-1 md:grid-cols-6 gap-6 text-sm">
                    <Info label="ENROLLMENT NO." value={studentInfo.enrollment} />
                    <Info label="STUDENT NAME" value={studentInfo.name} />
                    <Info label="INSTITUTE" value={studentInfo.institute} />
                    <Info label="PROGRAM" value={studentInfo.program} />
                    <Info label="BATCH" value={studentInfo.batch} />
                    <Info label="YEAR OF ADMISSION" value={studentInfo.admissionYear} />
                </div>

                {/* Result Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead className="bg-gray-100 text-gray-600">
                            <tr>
                                <Th>SEM/ANNUAL</Th>
                                <Th>PAPER CODE</Th>
                                <Th className="text-left">SUBJECT NAME</Th>
                                <Th>INTERNAL</Th>
                                <Th>EXTERNAL</Th>
                                <Th>TOTAL</Th>
                                <Th>EXAM (MONTH, YEAR)</Th>
                                <Th>DECLARED DATE (YYYY-MM-DD)</Th>
                            </tr>
                        </thead>

                        <tbody className="text-black">
                            {results.map((row, i) => (
                                <tr
                                    key={i}
                                    className={i % 2 === 0 ? "bg-white text-black" : "bg-gray-200"}
                                >
                                    <Td>{row.sem}</Td>
                                    <Td>
                                        <span className="px-3 py-1 rounded text-black bg-gray-100 font-medium">
                                            {row.code}
                                        </span>
                                    </Td>
                                    <Td className="text-left text-black">{row.subject}</Td>
                                    <Td>{row.internal}</Td>
                                    <Td>{row.external}</Td>
                                    <Td className="font-semibold text-black">{row.total}</Td>
                                    <Td>12, 2025</Td>
                                    <Td>2026-01-22</Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        </>
    );
}

/* Reusable components */

function Info({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-gray-500 font-medium mb-1">{label}</p>
            <p className="text-gray-800 font-semibold">{value}</p>
        </div>
    );
}

function Th({ children, className = "" }: any) {
    return (
        <th
            className={`border px-3 py-3 text-center font-semibold ${className}`}
        >
            {children}
        </th>
    );
}

function Td({ children, className = "" }: any) {
    return (
        <td className={`border px-3 py-3 text-center ${className}`}>
            {children}
        </td>
    );
}
