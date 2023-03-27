// @ts-nocheck
const PageSize = 5;

function checkEmail(email) {
    const check = email.trim().match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  
    if (!check) return true;
    else return false;
}

function calculateTotal(contracts, services) {
    const active = services.filter(c => c.status === 'active').length;
    const inactive = services.filter(c => c.status === 'inactive').length;
    const draft = services.filter(c => c.status === 'draft').length;
    const approved = services.filter(c => c.status === 'approved').length;
    return {
        active,
        inactive,
        draft,
        approved
    };
}

export {
    PageSize,
    calculateTotal,
    checkEmail
}