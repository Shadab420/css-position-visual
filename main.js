import positions from './positions.js';

$(document).ready(function(){
    let body = $('#body');
    let positionStyle = $('#position-style');
    let positionExplanation = $('#position-explanation');
    let childSelect = $('#child-select');
    let positionSelect = $('#position-select');
    let toggleBtn = $('#toggle-checkbox');

    function applyStyle(parent, child, position){
        
        $('#parent').removeAttr('style');
        $('#parent *').removeAttr('style');
        
        switch(position){
            case 0:
                child.css({
                    'position': 'relative',
                    'top': '-30px'
                });

                return;

            case 1:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'top': '-30px'
                });

                return;

            case 2:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'top': '0'
                });

                return;

            case 3:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'right': '0'
                });

                return;

            case 4:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'bottom': '0'
                });
                
                return;
            
            case 5:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'left': '0'
                });
                
                return;

            case 6:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'left': '0',
                    'right': '0'
                });
                
                return;
            
            case 7:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'bottom': '0',
                });
                
                return;

            case 8:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'bottom': '0',
                    'right': '0'
                });
                
                return;
            
            case 9:
                child.css({
                    'position': 'absolute',
                    'top': '0'
                });

                return;
                    
            case 10:
                child.css({
                    'position': 'absolute',
                    'right': '0'
                });

                return;

            case 11:
                child.css({
                    'position': 'absolute',
                    'bottom': '0'
                });

                return;
            
            case 12:
                child.css({
                    'position': 'absolute',
                    'left': '0'
                });

                return;

            case 13:
                child.css({
                    'position': 'absolute',
                    'top': '50%',
                    'left': '0',
                    'right': '0'
                });
                
                return;
            
            case 14:
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'bottom': '0',
                });
                
                return;

            case 15:
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'bottom': '0',
                    'right': '0'
                });

                setTimeout(()=>{ alert("Understood? He he he :D"); $('#parent *').removeAttr('style'); return;}, 300);

                return;
    
                    
            case 16:
                parent.css('position', 'relative')
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });

                return;
            
            case 17:
                parent.css('position', 'relative')
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'right': '0'
                });

                return;
    
            case 18:
                parent.css('position', 'relative')
                child.css({
                    'position': 'absolute',
                    'bottom': '0',
                    'right': '0'
                });

                return;
            
            case 19:
                parent.css('position', 'relative')
                child.css({
                    'position': 'absolute',
                    'bottom': '0',
                    'left': '0'
                });

                return;
                    
            case 20:
                parent.css('position', 'relative');
                child.css({
                    'position': 'absolute',
                    'top': '50%',
                    'margin-top': '-50px',
                    'left': '50%',
                    'margin-left': '-50px',
                });

                return;

            case 21:
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });

                return;
            
            case 22:
                child.css({
                    'position': 'absolute',
                    'top': '0',
                    'right': '0'
                });

                return;
    
            case 23:
                child.css({
                    'position': 'absolute',
                    'bottom': '0',
                    'right': '0'
                });
                return;
            
            case 24:
                child.css({
                    'position': 'absolute',
                    'bottom': '0',
                    'left': '0'
                });
                return;
                    
            case 25:
                child.css({
                    'position': 'absolute',
                    'top': '50%',
                    'margin-top': '-50px',
                    'left': '50%',
                    'margin-left': '-50px',
                });
                return;

            case 26:
                body.css('height', '280vh');
                parent.css('position', 'relative');
                child.css({
                    'position': 'sticky',
                    'top': '0'
                });

                alert('scroll to see the magic! :D');

                return;

            case 27:
                body.css('height', '250vh');
                parent.css('position', 'relative');
                child.css({
                    'position': 'fixed',
                    'top': '0'
                });

                alert('scroll to see the magic! :D');

                return;
            
            default:
                return;
        }
        
    }

    function addChangeListener(item, changeStyle){
        item.bind('change keyup', function(){

            if(changeStyle == "cs"){
                
                let child = $('#'+childSelect.val());
                let position = positionSelect.val();
                let parent = $('#parent');

                if(position !== ''){
                    
                    positionStyle.text(positions[position].style)
                    positionExplanation.text(positions[position].description)

                    position = parseInt(position);
                    applyStyle(parent, child, position);
                }
                
            }

            else if(changeStyle == "ps"){
                if(childSelect.val() !== '')
                {
                    let child = $('#'+childSelect.val());
                    let position = parseInt(positionSelect.val());
                    let parent = $('#parent');

                    positionStyle.text(positions[position].style)
                    positionExplanation.text(positions[position].description)
                    
                    applyStyle(parent, child, position);
                }
                else{
                    alert('Please select a child!');
                }
                
            }
        })

    }

    function theme(){
        body.css({
            'background': 'linear-gradient(lightcyan, lightpink)',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'min-height': '100vh',
        });

        $('.selection-div').css({
            'box-shadow': '0px 5px 10px #000'
        });

        $('select, textarea').css({
            'border': '1px solid blue',
            'border-radius': '5px'
        })

        $('#parent').css({
            'background-color': 'rgb(213, 199, 252)',
            'box-shadow': '0px 5px 10px #000'
        });

        $('.child').css({
            'box-shadow': '0px 5px 10px #000'
        });
    }

    function noTheme(){
        body.css({
            'background': '',
            'background-size': '',
            'background-repeat': '',
            'min-height': '',
        });

        $('.selection-div').css({
            'box-shadow': ''
        });

        $('select, textarea').css({
            'border': '',
            'border-radius': ''
        })

        $('#parent').css({
            'background-color': '',
            'box-shadow': ''
        });

        $('.child').css({
            'box-shadow': ''
        });

    }


    addChangeListener(childSelect, "cs");
    addChangeListener(positionSelect, "ps");

    toggleBtn.click(()=>{

        if(toggleBtn.prop('checked') === true){
            theme();
        }
        else{
            noTheme();
        }
    })

})
