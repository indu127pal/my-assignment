const calculateTotal = (contracts, services) => {
    const active = services.filter(c => c.status === 'active').length;
    const inactive = services.filter(c => c.status === 'inactive').length;
    const draft = services.filter(c => c.status === 'draft').length;
    const approved = services.filter(c => c.status === 'approved').length;
    return {
        active,
        inactive,
        draft,
        approved
    }
}

export {
    calculateTotal
}