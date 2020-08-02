import checkNumInputs from './checkNumbInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');
    
    function bindActionToElem(event, elem, prop) {
        elem.forEach((item , i) => {  
            item.addEventListener(event, () => {
                // if(elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value;
                // }

                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    
                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if(i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    
                    case 'SELECT' : 
                        state[prop] = item.value;
                        break;
                };

            });
        });
    };

    bindActionToElem('click', windowForm, 'form');
    bindActionToElem('input', windowHeight, 'height');
    bindActionToElem('input', windowWidth, 'width');
    bindActionToElem('change', windowType, 'type');
    bindActionToElem('change', windowProfile, 'profile');

    // windowForm.forEach((item ,i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //     });
    // });
};

export default changeModalState;