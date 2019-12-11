import {ADD,DESC,EDIT,DEL, RECH} from './actiontype';
export function add (payload)
{
    return {type:ADD,payload};
}
export function desc(payload)
{
    return {type:DESC,payload};
}
export function edit (payload,id)
{
    return {type:EDIT,payload,id};
}
export function del(payload)
{
    return {type:DEL,payload};
}
export function rech(payload)
{
    return {type:RECH,payload};
}


