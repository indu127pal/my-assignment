export interface RootState {
    sampleData: {
        contracts: ContractWorker[]
        services: ServiceContract[]
        workerContractMappings: WorkerContractMapping[]
        showForm: Form
        contractForm: Form
        loading: boolean
        error: string
    }
}

export interface Form {
    id: number
    employeeNumber: string
    firstName: string
    lastName: string
    role: string
    startDate: string
    contractNumber: string
    email: string
    status: string
    ownerId: number
    ownerName: string
}

export interface ContractWorker {
    id: number
    firstName: string
    lastName: string
    role: string
    startDate: string
    email: string
    employeeNumber: string
}

export interface ServiceContract {
    id: number
    contractNumber: string
    status: string
    ownerId: number
    ownerName: string
    email: string
}

export interface WorkerContractMapping {
    id: number
    employeeNumber: string
    contractNumber: string
    allocation: number
}  