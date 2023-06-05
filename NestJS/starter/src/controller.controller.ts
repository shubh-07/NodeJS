import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';

@Controller('nest')
export class NestController {
    @Get('wildcard/ab*cd')
    //The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on. The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts. The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
    wildcard() {
        return 'This route uses a wildcard.'
    }

    @Get('header')
    @Header('Cache-Control', 'none')
    header() {
        return 'This adds the header to request headers';
    }

    @Get('redirect')
    @Redirect('https://nestjs.com', 301)
    redirect() {
        return 'This redirects to https://nestjs.com'
    }

    @Get('httpCodeChange')
    @HttpCode(201)
    httpCodeChange(): String {
        return 'This changes the status code to 201.';
    }

    @Get('request')
    @HttpCode(201)
    request(@Req() req): Object {
        return {
            headers: req.headers,
            body: req.body,
            method: req.method,
            originalUrl: req.originalUrl,
            params: req.params,
            rawHeaders: req.rawHeaders,
            route: req.route,
            url: req.url
        };
    }

    @Get('response')
    response(@Res() res) {
        // res.statusCode = 200;
        res.on('finish', () => {
            console.log('hello');
        })
        return res.send({ msg: 'Status code changed.' })
    }
}
